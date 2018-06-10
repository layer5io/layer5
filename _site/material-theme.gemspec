# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-material-theme"
  spec.version       = "0.6.0"
  spec.authors       = ["James Hamann"]
  spec.email         = ["jameshamann0@gmail.com"]

  spec.summary       = "A Material Theme for Jekyll"
  spec.homepage      = "https://github.com/jameshamann/jekyll-material-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(js|css|assets|_sass|_layouts|_includes|_posts|LICENSE|README|_config.yml)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.5"
  spec.add_runtime_dependency "jekyll-assets", "~> 3.0"
  spec.add_runtime_dependency "jekyll-minifier", "~> 0.1"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "kramdown", "~> 1.16"


  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "capybara", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.7"
  spec.add_development_dependency "selenium-webdriver", "~> 3.8"


end
