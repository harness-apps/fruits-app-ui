current_dir = $(shell pwd)
compose_file = "$(current_dir)/docker-compose.yaml"

test:	## Runs test
	@drone exec --trusted --env-file=.build.env

clean:	## Cleans output
	pnpm clean

build-push-image:	## Builds Container Image
	@drone exec --trusted --env-file=.build.env

help: ## Show this help
	@echo Please specify a build target. The choices are:
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "$(INFO_COLOR)%-30s$(NO_COLOR) %s\n", $$1, $$2}'

.PHONY: test clean	help  build-push-image
