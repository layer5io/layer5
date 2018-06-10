# Require all of the necessary gems
require 'yaml'
require 'rspec'
require 'capybara/rspec'
require 'rack/jekyll'
require 'rack/test'
require 'pry'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end


  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  # Configure Capybara to use Selenium.
  Capybara.register_driver :selenium do |app|
    # Configure selenium to use Chrome.
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
  end

  # Configure Capybara to load the website through rack-jekyll.
  # (force_build: true) builds the site before the tests are run,
  # so our tests are always running against the latest version
  # of our jekyll site.
  Capybara.app = Rack::Jekyll.new(force_build: false)
end
