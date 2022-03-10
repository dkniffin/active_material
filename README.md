# ActiveMaterial

An ActiveAdmin skin based on Google's Material Design.

<img src="http://i.imgur.com/kDkGzYe.png">

## Installation

- `npm install --save active_material` or `yarn add active_material`
- Add `@import "active_material/src/stylesheets/active_material.scss";` to your CSS style file (eg `app/javascript/packs/active_admin.scss`). *Note:* this requires that your build system supports compiling SCSS
- Add `import "active_material"` to your JS file (eg `app/javascript/packs/active_admin.js`)

## Upgrading from v1 to v2

This activeadmin theme is entirely JS and CSS, and there is no custom ruby code. Therefore, since v2, active_material has been converted from a ruby gem to an npm package. As part of this process, sprockets is also no longer supported.

To upgrade from v1 to v2, follow these steps:
1. Follow the instructions above for "installation" to add the npm version
2. Remove references to active_material in `app/assets/stylesheets/active_admin.scss`. Any customizations should be moved over to wherever the new scss import is.
3. Remove references to active_material in `app/assets/javascripts/active_admin.js`.
4. Remove the `gem 'active_material'` from your Gemfile (and run `bundle install` to update Gemfile.lock)
