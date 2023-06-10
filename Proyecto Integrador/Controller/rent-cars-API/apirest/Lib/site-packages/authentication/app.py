from collections import defaultdict
from datetime import datetime
from functools import wraps
import json
from logging import getLogger

from flask import Blueprint, render_template, request, url_for,\
    redirect, flash, make_response, current_app

from authentication import init_auth_blueprint
from authentication.auth import crypting
from authentication.auth.models import User, AnonymousUser
from authentication.views.wtforms import LoginForm, RegistrationForm, UpdateUserForm
from authentication.models.exceptions import NotFound, ValidationError

# __all__ = ['User', 'AnonymousUser', 'NotFound', 'ValidationError', 'auth', 'login_required']

auth = Blueprint('auth', __name__, template_folder='templates')
logger = getLogger(__name__)


@auth.before_app_request
def get_current_user():
    encrypted_username = request.cookies.get('username')
    if encrypted_username is None:
        request.user = AnonymousUser()
    else:
        try:
            username = crypting.aes_decrypt(encrypted_username)
        except UnicodeDecodeError:
            request.user = AnonymousUser()
        else:
            try:
                request.user = User.load(username)
            except:  #NotFound
                request.user = AnonymousUser()
            else:
                request.user.last_active = datetime.datetime.now()
                request.user.save()


def login_required(func):
    @wraps(func)
    def wrapped(*args, **kwargs):
        if not request.user.is_authenticated():
            r = make_response(redirect(url_for('.login')))
            r.delete_cookie('username')
            r.delete_cookie('first_name')
            flash('You are not logged in')
            return r
        else:
            return func(*args, **kwargs)

    return wrapped


@auth.app_context_processor
def inject_user():
    return dict(user=request.user)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.user.is_authenticated():
        flash('You are already logged in')
        return redirect(url_for('.logout'))

    login_form = LoginForm(request.form)
    if request.method == 'GET':
        return render_template('login.html', loginform=login_form)

    elif not login_form.validate():
        flash('Error in the form')
        return render_template('login.html', loginform=login_form)

    # if we reached this line, then we received a POST request and login_form is validated
    username = login_form.username.data
    password = login_form.password.data
    try:
        user = User.load(username)
    except:  # NotFound
        logger.info(f'user {username} is not found')
        flash("Incorrect credentials: please double-check username")
        return render_template('login.html', loginform=login_form)

    logger.info(f'Login: user password is {user.password}')
    logger.info(f'Login: password entered is {password}')
    if user.verify_password(password):
        r = make_response(redirect(url_for('welcome')))
        encrypted_username = crypting.aes_encrypt(username)
        if login_form.rememberme.data:
            r.set_cookie('username', encrypted_username,
                         expires=datetime.datetime.now() + datetime.timedelta(days=365))
            r.set_cookie('first_name', user.first_name,
                         expires=datetime.datetime.now() + datetime.timedelta(days=365))

        else:
            r.set_cookie('username', encrypted_username)
            r.set_cookie('first_name', user.first_name)
        flash('You are successfully logged in!')

        user.last_login = datetime.now()
        user.save()
        return r
    else:
        flash("Incorrect credentials: please double-check username and password")
        return render_template('login.html', loginform=login_form)


@auth.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    if request.method == 'GET':
        return render_template('logout.html')

    else:
        r = make_response(redirect(url_for('.login')))
        r.delete_cookie('username')
        r.delete_cookie('first_name')
        flash('Successfully logged out')
        return r


@auth.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.user.is_authenticated():
        r = make_response(redirect(url_for('.logout')))
        flash('You are already logged in! Do you want to logout?')
        return r

    regform = RegistrationForm(request.form)
    if request.method == 'GET':
        return render_template('registration.html', regform=regform)

    elif not regform.validate():
        flash('Error: incorrect entry in the form')
        return render_template('registration.html', regform=regform)

    elif User.exists(regform.username.data):
        flash('This username is not available')
        return render_template('registration.html', regform=regform)

    else:
        User.create(username=regform.username.data,
                    password=regform.password.data,
                    first_name=regform.first_name.data,
                    dob=regform.dob.data,
                    email=regform.email.data)
        flash('Registration is successful! Please login.')
        return redirect(url_for('.login'))


@auth.route('/update_user', methods=['GET', 'POST'])
@login_required
def update_user():
    if request.method == 'GET':
        form = UpdateUserForm(username=request.user.username,
                              dob=request.user.dob,
                              first_name=request.user.first_name,
                              email=request.user.email)
        return render_template('update_user.html', form=form)

    form = UpdateUserForm(request.form)
    if not form.validate():
        flash('Error: incorrect entry in the form')
        return render_template('update_user.html', form=form)

    elif request.user.verify_password(form.cur_password.data):
        print(f'Data is {form.data}')
        print(f'Entered username is {form.username.data}')
        print(f'Entered password is {form.cur_password.data}')

        request.user.update(**form.data)

        encrypted_username = crypting.aes_encrypt(form.username.data)
        r = make_response(redirect(url_for('index')))
        r.set_cookie('username', encrypted_username)
        r.set_cookie('first_name', form.first_name.data)
        flash('You are successfully logged in!')
        return r
    else:
        flash("Incorrect credentials: please double-check password")
        return redirect(url_for('.update_user'))
