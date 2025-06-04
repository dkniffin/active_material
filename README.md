# ActiveMaterial

An ActiveAdmin skin based on Google's Material Design.

<img src="http://i.imgur.com/kDkGzYe.png">

## Installation

### Importmap
- Add `gem 'active_material'` to `Gemfile` and run `bundle install`

NOTE: no need to pin the import in your application. That's handled internally by the gem.

### npm
- `npm install --save active_material` or `yarn add active_material`

## Usage
- Add `import "active_material"` to JS entrypoint (a JS file that is included for activeadmin)
- Add `@use "active_material";` in your CSS style file
  - NOTE: the active_material SCSS files are included in the asset path automatically for importmap, but you will need to have SCSS build capabilities, using dartsass-rails or similar

## Customization
For customization options, see [customization.md](./docs/customization.md)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
