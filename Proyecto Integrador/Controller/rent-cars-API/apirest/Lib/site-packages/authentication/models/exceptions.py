class NotFound(Exception):
    message = 'Entry is not found in the database'


class ValidationError(ValueError):
    message = 'Inappropriate arguments'
