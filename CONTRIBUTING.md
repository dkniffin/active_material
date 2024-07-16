# Contributing

Thank you for considering a contribution to this project!

## Create an issue

If you find an issue, or you'd like to request a new feature, [open a github issue](https://github.com/dkniffin/active_material/issues/new).

## Submit a pull request

If you know how to make the change, please submit a pull request (PR). This makes it much easier to
accept the change

1. Fork it ( https://github.com/[my-github-username]/active_material/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am "Add some feature"`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

In order for the PR to be merged, the test suite must pass, there must be no conflicts on the
merge, and it must be merged by a maintainer.

## Issue and PR reviews

Another way you can help is by reviewing issues, trying to reproduce bugs, and providing feedback on PRs.

## Pushing a new version

First, you must be authorized on both rubygems.org and npmjs.com. Then:

1. Update the ruby gem:
  - Update the version in `lib/active_material/version.rb`
  - `gem build active_material.gemspec`
  - `gem push active_material-X.Y.Z.gem`

2. Update the npm package:
  - Update the version in `package.json`
  - `npm publish`

3. Update the changelog.

4. Commit and push changes

5. Tag the version in git:
  - `git tag -a X.Y.Z`
  - Add the same text as the changelog to the tag description
  - `git push origin X.Y.Z`
