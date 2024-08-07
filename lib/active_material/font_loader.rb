module ActiveMaterial
  module FontLoader
    def build_active_admin_head
      within super do
        uri = URI.parse(ActiveMaterial::Rails::Engine.config.active_material.font_url)
        origin = extract_origin(uri)

        link(rel: "preconnect", href: origin)
        link(rel: "preconnect", href: origin, crossorigin: true)
        link(rel: "stylesheet", href: uri.to_s)
      end
    end

    private

    def extract_origin(uri)
      origin = "#{uri.scheme}://#{uri.host}"
      origin += ":#{uri.port}" if uri.port && !default_port?(uri)
      origin
    end

    def default_port?(uri)
      (uri.scheme == 'http' && uri.port == 80) || (uri.scheme == 'https' && uri.port == 443)
    end
  end
end
