.PHONY: help install preview build clean

help:
	@echo "make preview  - Preview the docs at http://localhost:3000 (installs deps on first run)"
	@echo "make build    - Build the docs, fails on broken MDX or meta.json"
	@echo "make clean    - Remove build output and dependencies"

node_modules: package.json pnpm-lock.yaml
	pnpm install --frozen-lockfile
	@touch node_modules

install: node_modules

preview: node_modules
	pnpm dev

build: node_modules
	pnpm build

clean:
	rm -rf .next .source node_modules
