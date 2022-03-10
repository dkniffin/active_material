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
