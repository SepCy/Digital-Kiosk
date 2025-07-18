SHELL = bash
.ONESHELL:

all: run

run:
	docker compose build --parallel
	docker compose up

shell:
	docker compose exec api /bin/bash

migrate:
	docker compose exec api alembic upgrade head

new-migration:
	@if [ -z "$(name)" ]; then \
        echo "Error: name parameter is required. Usage: make new-migration name='your_migration_name'"; \
        exit 1; \
  fi
	docker compose exec api alembic revision --autogenerate -m "$(name)"

init-alembic:
	docker-compose exec api alembic init -t async alembic

test:
	docker compose exec api pytest

