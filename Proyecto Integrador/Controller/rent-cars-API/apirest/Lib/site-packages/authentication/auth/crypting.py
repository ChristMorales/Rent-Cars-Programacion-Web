import base64

from Crypto.Cipher import AES
# from Crypto.Random import get_random_bytes

# key = get_random_bytes(16)
key = b'u\xfa\x1f\x9a\x14\x19&\xe7b#\x86\xdd\x94\x0f[N'
cipher = AES.new(key, AES.MODE_ECB)


def aes_encrypt(data: str) -> str:
    """
    Encrypt data with AES crypto algorithm.

    :param data: string to encrypt with AES
    :return: encrypted string
    """
    length = 16 - (len(data) % 16)
    data += chr(length) * length

    ciphertext = cipher.encrypt(data.encode('utf-8'))
    ciphertext = base64.b64encode(ciphertext)
    return ciphertext.decode('utf-8')


def aes_decrypt(ciphertext: str) -> str:
    ciphertext = base64.b64decode(ciphertext)
    data = cipher.decrypt(ciphertext)
    # crop extra tildes on the right
    return data[:-data[-1]].decode('utf-8')


