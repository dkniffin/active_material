# ActiveMaterial

An ActiveAdmin skin based on Google's Material Design.

<img src="http://i.imgur.com/kDkGzYe.png">

1. [Installation](#installation)
2. [Usage](#usage)
3. [Customization](#customization)
4. [Contributing](#contributing)

## Installation

Add this line to your application's Gemfile:

```ruby
gem "active_material"
```

And then execute:

```shell
$ bundle
```

Or install it yourself as:

```shell
$ gem install active_material
```

## Usage

In `app/assets/stylesheets/active_admin.css.scss`, replace:

`@import "active_admin/base";`

with

`@import "active_material";`

Additionally, ActiveMaterial comes with an optional JavaScript bundle that adds a few additional features. It should be included right after the active_admin base script.

In app/assets/javascripts/active_admin.js, add:

```
//= require active_material
```

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
