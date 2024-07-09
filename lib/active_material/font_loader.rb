module ActiveMaterial
  module FontLoader
    def build_active_admin_head
      within super do
        uri = URI.parse(ActiveMaterial::Rails::Engine.config.active_material.font_url)
        link(rel: "preconnect", href: uri.origin)
        link(rel: "preconnect", href: uri.origin, crossorigin: true)
        link(rel: "stylesheet", href: uri.to_s)
      end
    end
  end
end
