FROM python:3.13
WORKDIR /app
RUN --mount=type=cache,mode=0755,target=/root/.cache/pypoetry \
  pip install --upgrade pip && pip install 'poetry>=2.0.1,<3.0.0'
COPY pyproject.toml ./
COPY pytest.ini ./
ARG POETRY_INSTALL_EXTRA_ARGS=""
RUN  --mount=type=cache,mode=0777,target=/root/.cache/pypoetry \
     poetry config cache-dir /root/.cache/pypoetry \
  && poetry config virtualenvs.create false \
  && poetry install -vv ${POETRY_INSTALL_EXTRA_ARGS}
EXPOSE 8000
ENV PYTHONPYCACHEPREFIX=/tmp/pycache/
CMD ["uvicorn", "src.app:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "8000"]
COPY src ./src
COPY ./alembic ./alembic
COPY ./alembic.ini ./alembic.ini
ARG BUILD_COMMIT_SHA
RUN echo BUILD_COMMIT_SHA=$BUILD_COMMIT_SHA
ENV SENTRY_RELEASE=$BUILD_COMMIT_SHA
