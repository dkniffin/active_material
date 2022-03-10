# ActiveMaterial

An ActiveAdmin skin based on Google's Material Design.

<img src="http://i.imgur.com/kDkGzYe.png">

1. [Installation](#installation)
2. [Usage](#usage)
3. [Customization](#customization)
4. [Contributing](#contributing)

## Installation

### Sprockets

- Add `gem 'active_material'` to `Gemfile` and run `bundle install`
- In `app/assets/stylesheets/active_admin.scss`, replace `@import "active_admin/base";` with `@import "active_material";`
- In app/assets/javascripts/active_admin.js, add `//= require active_material`

### Webpacker / npm

- `npm install --save activeadmin_reorderable` or `yarn add activeadmin_reorderable`
- Add `@import "active_material/app/assets/styleseets/active_material.scss";` to your CSS style file
- Add `import "active_material"` to your JS pack file

## Customization

Refer to the [Customization Guide](./docs/customization.md).

## Contributing

1. Fork it ( https://github.com/[my-github-username]/active_material/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am "Add some feature"`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

### Issue and PR reviews

Another way you can help is by reviewing issues, trying to reproduce bugs, and providing feedback on PRs.

## Pushing a new version

First, you must be authorized on both rubygems.org and npmjs.com. Then:

Update the ruby gem:
- Update the version in `lib/activeadmin_reorderable/version.rb`
- `gem build activeadmin_reorderable.gemspec`
- `gem push activeadmin_reorderable-X.Y.Z.gem`

Update the npm package:
- Update the version in `package.json`
- `npm publish`

Tag the version in git:
- `git tag X.Y.Z`
- `git push origin X.Y.Z`

Update the changelog
