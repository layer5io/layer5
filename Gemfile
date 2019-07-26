source "https://rubygems.org"

ruby '2.6.3'

gem 'materialize-sass'
gem "jekyll", "~> 3.8.5"
gem "minima", "~> 2.0"
gem 'rspec'
gem 'capybara'
gem "selenium-webdriver"
gem "rack-jekyll"
gem "pry"
gem "puma"
gem 'jekyll-sitemap'
gem 'jekyll-redirect-from'

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-assets"
  gem "jekyll-minifier"
  gem 'jekyll-manager' if ENV['ADMIN'] == 'on'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gemspec
