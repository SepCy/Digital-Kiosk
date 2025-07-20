SHELL = bash
.ONESHELL:

all: run

run:
	docker compose up --build

stop:
	docker compose down

shell-api:
	docker compose exec api /bin/bash

shell-frontend:
	docker compose exec frontend /bin/bash

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

test-api:
	docker compose exec api pytest

test-frontend:
	docker compose exec frontend npm test



