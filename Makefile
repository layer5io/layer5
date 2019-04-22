jekyll=bundle exec jekyll

site:
	$(jekyll) serve --drafts --livereload

# With Jekyll Manager interface
site-admin:
	ADMIN=on $(jekyll) serve --drafts --livereload

build:
	$(jekyll) build --drafts --livereload

setup:
	ADMIN=on bundle install

docker:
	docker run --name layer5 --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:3.8.5 bash -c "bundle install; jekyll serve --drafts --livereload"
