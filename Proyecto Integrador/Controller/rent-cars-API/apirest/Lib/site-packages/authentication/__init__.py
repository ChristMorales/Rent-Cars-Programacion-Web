from flask import current_app


def init_auth_blueprint(redis_url='') -> None:
    if not redis_url:
        redis_url = current_app.config.get('REDIS_URL', 'redis://redis:6379/0')

    print(f'Initializing app... redis_url={redis_url}')
    """
    the following code writes into the folder of the original app
    with open('redis_config.py', 'w+') as redis_config:
        redis_config.write(f'REDIS_URL={redis_url}')
    """
    from authentication.models.db import db
    db.connect(url=redis_url)

    from authentication import app
    current_app.register_blueprint(app.auth)



