help:
	@echo "USAGE: make [help|deploy]"

deploy: 
	cp -R .gh-pages/demos-homepage/ .gh-pages/
	ghp-import -p .gh-pages
