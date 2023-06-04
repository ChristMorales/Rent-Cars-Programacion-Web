from abc import ABC
from datetime import datetime
import json
from time import mktime
from uuid import uuid4

# from models.db import search
from authentication.models.db import db
from authentication.models.exceptions import NotFound, ValidationError


class BaseField(ABC):
    __slots__ = ['default', 'name']

    def __init__(self, name: str, default=None):
        self.name = '_' + name
        self.default = default

    def __set__(self, instance, value):
        setattr(instance, self.name, value)

    def __get__(self, instance, owner=None):
        if instance is None:
            return self
        else:
            return getattr(instance, self.name, self.default)

    def to_db(self, instance):
        return self.__get__(instance)

    @staticmethod
    def to_python(value):
        return value


class TextField(BaseField):
    pass


class DateField(BaseField):
    def to_db(self, instance):
        raw_value = self.__get__(instance)
        if raw_value is '' or None:
            return ''
        else:
            return int(mktime(raw_value.timetuple()))

    @staticmethod
    def to_python(timestamp):
        if timestamp == '':
            return ''
        else:
            return datetime.fromtimestamp(timestamp)


class BaseModel(ABC):
    @classmethod
    def get_attributes(cls):
        return [attr for attr, value in cls.__dict__.items() if isinstance(value, BaseField)]

    id = TextField(name='id', default='')
    reg_date = DateField(name='reg_date', default=lambda kwargs: datetime.now())

    @staticmethod
    def _generate_id(**kwargs):
        return uuid4()

    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)
        if not hasattr(self, 'reg_date'):
            self.reg_date = datetime.now()
            self.last_update = datetime.now()
            self.last_login = datetime.now()
            self.last_active = datetime.now()

    def save(self):
        self.last_update = datetime.now()
        d = dict()
        for attribute in self.get_attributes():
            d[attribute] = type(self).__dict__[attribute].to_db(self)
        print(f'Preparing instance for saving... data={d}')
        db.save(self.id, json.dumps(d))

    @classmethod
    def exists(cls, id: str or int) -> bool:
        return db.exists(id)

    @classmethod
    def validate(cls, data):
        pass

    @classmethod
    def clean(cls, data):
        return data

    @classmethod
    def create(cls, **kwargs):
        """
        creates new instance or raises ValidationError
        :param kwargs:
        :return:
        """
        cls.validate(kwargs)
        attrs = {}
        for attribute in cls.get_attributes():
            default = getattr(cls, attribute).default
            if callable(default):
                attrs[attribute] = default(kwargs)
            else:
                attrs[attribute] = default
        attrs.update(dict(kwargs))
        cls.clean(attrs)
        instance = cls(**attrs)
        instance.save()
        return instance

    def update(self, **kwargs) -> 'User':
        """
        update instance based on data in kwargs or raises ValidationError
        :param kwargs:
        :return:
        """
        #raise
        #update_db_key = 'username' in kwargs and kwargs['username'] == self.username
        cls = type(self)
        cls.validate(kwargs)
        attrs = {}
        for attribute in cls.get_attributes():
            attrs[attribute] = getattr(self, attribute)
        attrs.update(dict(kwargs))
        cls.clean(attrs)
        instance = cls(**attrs)
        # transfer some data from self
        instance.username = self.username
        instance.id = self.id
        instance.reg_date = self.reg_date
        instance.last_login = self.last_login
        instance.last_active = datetime.now()
        instance.last_update = datetime.now()
        if not kwargs['password']:
            instance.password = self.password
        print(f'Updated user is {instance}')

        self.delete(self.id)
        instance.save()
        return instance

    @staticmethod
    def info_to_db_key(**kwargs) -> str:
        return '*'

    @classmethod
    def _db_dict_to_instance(cls, data: bytearray):
        print(data)
        data = json.loads(data)
        data_new = {}
        for k, v in data.items():
            data_new[k] = cls.__dict__[k].to_python(v)
        return cls(**data_new)

    @classmethod
    def load(cls, id: str):
        data = db.load(id)
        if data is None:
            raise NotFound

        return cls._db_dict_to_instance(data)

    @classmethod
    def search(cls, **kwargs) -> iter:
        final_ans = []
        for post in db.search(cls.info_to_db_key(**kwargs)):
            final_ans.append(cls._db_dict_to_instance(post))
        return final_ans

    @staticmethod
    def delete(id: str) -> None:
        db.delete(id)

