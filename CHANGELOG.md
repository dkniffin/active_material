# CHANGELOG

## 2.0.1

- Removes dependency on globbing extension (#85)

## 2.0.0

This activeadmin theme is entirely JS and CSS, and there is no custom ruby code. Therefore, since v2, active_material has been converted from a ruby gem to an npm/JS package. As part of this process, sprockets is also no longer supported.

### Breaking changes
- Sprockets is no longer supported
- The library is converted from ruby gem to npm/JS package

### Upgrading

To upgrade from v1 to v2, follow these steps:
1. Follow the instructions in the readme for "installation" to add the npm/JS version
2. Remove references to active_material in `app/assets/stylesheets/active_admin.scss`. Any customizations should be moved over to wherever the new scss import is.
3. Remove references to active_material in `app/assets/javascripts/active_admin.js`.
4. Remove the `gem 'active_material'` from your Gemfile (and run `bundle install` to update Gemfile.lock)

## 1.4.1

- Add `!default` flag to `$am-theme-error-400` color

## 1.4.0

- Enhance dialog styles. These are viewable when conducting batch operations

## 1.3.1

- Fix typo in active state of dropdown menu that caused batch actions
  to be invisible.

## 1.3.0

- Added coverage for sortable table rows.
- Moved icons to `active_material` folder to avoid conflicts.

## 1.2.0

- Significant updates to fix datepicker styles and expose new
  configuration variables.
- Webfonts are now configured by pulling in `active_material` in the
  JavaScript main entrypoint

### Upgrading

Include `active_material` in the main JavaScript endpoint like:

```
//= require active_material
```

## 1.1.0

- Remove restrictive cascading list styles to prevent conflicts with rich text
  editors such as Redactor.

## 1.0.0

This version includes several important structural changes to
eliminate the possibility of rule collisions outside of ActiveMaterial
and paves the way for future enhancements to the project.

Release:
https://github.com/dkniffin/active_material/releases/tag/v1.0.0

### Breaking Changes

- The main stylesheet is now imported using `@import "active_material";`
- All variables, functions, mixins, and rules are namespaced with `am-*`.
- All pseudo-selectors (`%rule {}`) are now mixins.

### Upgrading

#### Variables

Projects using ActiveMaterial internal variables should consult the
[API documentation's list of variable definitions](http://code.viget.com/active_material/docs/api/#undefined-variable). In
almost all cases, the variable names have simply been prepended with
`am-`.

For example, `$theme-primary` is now `$am-theme-primary`.

#### Pseudo Selectors

Instead of relying upon `@extend`, components now utilize
mixins. Projects that rely upon `@extend` to pull in ActiveMaterial
styles should replace these lines with `@include am-*`, where `am-*`
is the associated style chunks reimplemented as mixins.

For example, `@extend %am-btn` is now `@include am-btn`.
