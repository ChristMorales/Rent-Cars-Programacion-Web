from datetime import datetime
from time import time
import json
from passlib.hash import sha256_crypt
from typing import Dict

from authentication.models.basemodel import BaseModel, ValidationError
from authentication.models.basemodel import TextField, DateField
from authentication.models.db import db


class User(BaseModel):
    _is_authenticated = True

    @classmethod
    def is_authenticated(cls):
        return cls._is_authenticated

    id = TextField(name='id', default=lambda kwargs: User._generate_id(**kwargs))
    username = TextField(name='username', default='')
    first_name = TextField(name='first_name', default='')
    dob = DateField(name='dob', default='')
    email = TextField(name='email', default='')
    password = TextField(name='password', default='')
    reg_date = DateField(name='reg_date', default=lambda kwargs: datetime.now())
    last_update = DateField(name='last_update', default=lambda kwargs: datetime.now())
    last_login = DateField(name='last_login', default=lambda kwargs: datetime.now())
    last_active = DateField(name='last_active', default=lambda kwargs: datetime.now())
    photo = TextField(name='photo', default='')

    @staticmethod
    def _generate_id(**kwargs) -> str:
        """
        generates db primary key
        """
        if 'username' not in kwargs:
            raise

        return f'user:{kwargs["username"]}'

    @staticmethod
    def hash_password(password: str) -> str:
        """
        hashes password using sha256 encrypting
        :param password: password to be hashed
        :return: hashed password
        """
        return sha256_crypt.hash(password)

    def verify_password(self, password: str) -> bool:
        """
        verifies that the password matches the hashed password
        :param password: unhashed password
        """
        return sha256_crypt.verify(password, self.password)

    @staticmethod
    def validate(data: Dict) -> None:
        """
        validates that data contains key username. If not, raises ValidationError
        Function is used to verify that data contains enough info about the user
        :param data: all info about user
        """
        if 'username' not in data:
            raise ValidationError

    @classmethod
    def clean(cls, data: Dict) -> Dict:
        """
        prepares the data for saving
        :param data: dictionary with user info
        :return: dictionary with cleaned user info
        """
        data['password'] = cls.hash_password(data['password'])
        data['dob'] = data.get('dob', '')
        return data

    @staticmethod
    def info_to_db_key(**kwargs) -> str:
        return f'user:{kwargs["username"]}' if 'username' in kwargs else 'user:*'

    @classmethod
    def exists(cls, username: str) -> bool:
        """
        checks if the user username is in the database
        """
        return bool(db.exists(cls._generate_id(username=username)))

    @classmethod
    def load(cls, username: str) -> 'User':
        """
        Loads user from redis db 0
        :param username: username, also a key in redis db
        :return: instance of User if username is in db, otherwise raises NotFound
        """
        return super().load(cls._generate_id(username=username))

    def __str__(self):
        str = '_'*10
        str += f'Print user instance... \n'
        str += f'id={self.id} \n'
        str += f'username={self.username}\n'
        str += f'date of birth={self.dob}\n'
        str += f'registered since={self.date}\n'
        str += '_'*10 + '\n'
        return str


class AnonymousUser(User):
    _is_authenticated = False

    date = DateField(name='date', default=lambda kwargs: datetime.now())

    def __init__(self):
        super().__init__(username='AnonymousUser')

    @classmethod
    def get_attributes(cls):
        return ['id', 'username', 'date']

    @classmethod
    def load(cls, username: str) -> 'User':
        return User.load(username)

    def save(self):
        raise

