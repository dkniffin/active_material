# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'active_material/version'

Gem::Specification.new do |spec|
  spec.name          = "active_material"
  spec.version       = ActiveMaterial::VERSION
  spec.authors       = ["Derek Kniffin"]
  spec.email         = ["derek.kniffin@gmail.com"]
  spec.summary       = %q{ActiveAdmin skin based on Google's Material Design.}
  spec.description   = %q{ActiveAdmin skin based on Google's Material Design.}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files = Dir["{app,lib,config}/**/*", "LICENSE.txt", "package.json", "README.md"]
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "sass-rails"
end
