from backoff import expo, on_exception
from httpx import AsyncClient, ConnectTimeout, ReadTimeout


@on_exception(expo, ConnectTimeout, max_tries=3)
def delete(*args, **kwargs):
    return _HTTPX_CLIENT.delete(*args, **kwargs)


@on_exception(expo, (ConnectTimeout, ReadTimeout), max_tries=3)
def get(*args, **kwargs):
    return _HTTPX_CLIENT.get(*args, **kwargs)


@on_exception(expo, ConnectTimeout, max_tries=3)
def head(*args, **kwargs):
    return _HTTPX_CLIENT.head(*args, **kwargs)


@on_exception(expo, ConnectTimeout, max_tries=3)
def patch(*args, **kwargs):
    return _HTTPX_CLIENT.head(*args, **kwargs)


@on_exception(expo, ConnectTimeout, max_tries=3)
def post(*args, **kwargs):
    return _HTTPX_CLIENT.post(*args, **kwargs)


@on_exception(expo, ConnectTimeout, max_tries=3)
def put(*args, **kwargs):
    return _HTTPX_CLIENT.put(*args, **kwargs)


@on_exception(expo, ConnectTimeout, max_tries=3)
def stream(*args, **kwargs):
    return _HTTPX_CLIENT.stream(*args, **kwargs)


_HTTPX_CLIENT = AsyncClient()
