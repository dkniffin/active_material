# CHANGELOG

## 1.0.0

This version includes several important structural changes to
eliminate the possibility of rule collisions outside of ActiveMaterial
and paves the way for future enhancements to the project.

Release:
https://github.com/vigetlabs/active_material/releases/tag/v1.0.0

### Breaking Changes

- The main stylesheet is now imported using `@import "active_material";`
- All variables, functions, mixins, and rules are namespaced with `am-*`.
- All pseudo-selectors (%rule {}) are now mixins.

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
