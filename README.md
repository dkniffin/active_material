# ActiveMaterial

ActiveAdmin skin based on Google's Material Design.

<img src="http://i.imgur.com/dGZYLxA.png">

## Installation

Add this line to your application's Gemfile:

```ruby
gem "active_material", git: "git@github.com:vigetlabs/active_material.git"
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install active_material

## Usage

In `app/assets/stylesheets/active_admin.css.scss`, replace `@import "active_admin/base";` with `@import "active_material/active_material";`. If you wish to override the [default colors][1], do that *before* the `@import` statement.

[1]: https://github.com/vigetlabs/active_material/blob/master/app/assets/stylesheets/active_material/values/colors.scss

## Contributing

1. Fork it ( https://github.com/[my-github-username]/active_material/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am "Add some feature"`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
