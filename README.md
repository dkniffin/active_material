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
gem "active_material", github: "vigetlabs/active_material"
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

***

<a href="http://code.viget.com">
  <img src="http://code.viget.com/github-banner.png" alt="Code At Viget">
</a>

Visit [code.viget.com](http://code.viget.com) to see more projects from [Viget.](https://viget.com)
