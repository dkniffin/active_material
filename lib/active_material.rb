require "active_material/version"
require "active_material/font_loader"

module ActiveMaterial
  module Rails
    class Engine < ::Rails::Engine
      config.active_material = ActiveSupport::OrderedOptions.new
      config.active_material.load_font = true
      config.active_material.font_url = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"

      initializer "active_material" do |app|
        if app.config.active_material.load_font
          ActiveAdmin.before_load do
            ActiveAdmin::Views::Pages::Base.prepend ActiveMaterial::FontLoader
          end
        end
      end

      initializer "active_material.precompile" do |app|
        app.config.assets.paths << self.root.join("app/javascripts")
        app.config.assets.paths << self.root.join("app/stylesheets")
        app.config.assets.precompile << "active_material.js"
      end

      initializer "active_material.importmap", before: "importmap" do |app|
        # Skip if importmap-rails is not installed
        next unless app.config.respond_to?(:importmap)

        app.config.importmap.paths << Engine.root.join("config/importmap.rb")
      end
    end
  end
end
