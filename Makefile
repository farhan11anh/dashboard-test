sh:
	docker compose exec dashboard_lifestyle sh
build:
	docker compose exec dashboard_lifestyle pnpm build
up:
	docker compose up -d
upbuild:
	docker compose up -d --build
down:
	docker compose down

.PHONY: sh
