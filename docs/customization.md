# Customizing ActiveMaterial

This document is a work in progress. As customization needs arise, it
will be updated to provide an official answer for customizing ActiveMaterial.

1. Customizing the Color Theme

## Customizing the Color Theme

Definitions of all colors exist in
[a single colors.scss file](`../app/assets/stylesheets/active_material/values/colors.scss`). These
color variables are assigned using the `!default` Sass flag, so they
can be easily overridden.

Specifically, there are a few key color variables important when
retheming:

**$am-theme-primary**: The main color. This shows itself in the
  header, links, and other important elements.

**$am-theme-primary-700**: A darker version of the primary color used for
contrast. This shows itself within important elements that overlay
containers that are already treated with the primary color.

**$am-theme-secondary**: Used for your primary action button and
  components like switches or sliders.
