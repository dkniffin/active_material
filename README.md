# ActiveMaterial

An ActiveAdmin skin based on Google's Material Design.

<img src="http://i.imgur.com/kDkGzYe.png">

## Installation
### Importmap

- Add `gem 'active_material'` to `Gemfile` and run `bundle install`
- Add `import "active_material"` to JS entrypoint (a JS file that is included for activeadmin)
- Add `@import "active_material";` in your CSS style file (the active_material SCSS files are included in the asset path automatically, but you will need to have SCSS build capabilities, using dartsass-rails or similar)

NOTE: no need to pin the import in your application. That's handled internally by the gem.

### npm
- `npm install --save active_material` or `yarn add active_material`
- Add `import "active_material"` to your JS pack file
- Add `@import "active_material/app/assets/stylesheets/active_material.scss";` to your CSS style file

## Options

### Change font

By default, this gem will load the Roboto font from google APIs and use it in the SCSS. If you would like to change that behavior, you have a few options:

1. If you want to change to another font:
    - In your application config, set `config.active_material.font_url` to your font url
    - In your SCSS file, just before `@import "active_material";`, add `$am-font-sans: 'Roboto';`, replacing `Roboto` with your font name.
2. If you want to disable font loading altogether, you can use `config.active_material.load_font = true`

### Other customizations

For other customization options, see [customization.md](./docs/customization.md)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
