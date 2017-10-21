# Customizing ActiveMaterial

1. [Customizing the Color Theme](#customizing-the-color-theme)
2. [Color Variables](#color-variables)
3. [Font Variables](#font-variables)

## Customizing the Color Theme

Definitions of all colors exist in
[a single colors.scss file](`https://github.com/vigetlabs/active_material/blob/master/app/assets/stylesheets/active_material/values/colors.scss`). These
color variables are assigned using the `!default` Sass flag, so they
can be easily overridden.

**Variables need to be overriden before importing active_material.** For example, to customize the primary
color:

```scss
// The following variables override default ActiveMaterial values
$am-theme-primary: #00689f;
$am-theme-accent: #7dd2f7;
$am-theme-accent-fallback: #ff7547;

@import "active_material";
```

## Color variables

**$am-theme-primary:**  Primary theme color. This is the main admin theme color, showing itself on the main header, buttons, and other elements that command attention. If you want to change the main theme colors, this is the value you want.

**$am-theme-primary-700:** A darker primary theme color for contrast when overlaying important items containers that are already treated with primary color.

**$am-theme-accent:** Used for primary action button and components like switches or sliders.

**$am-theme-error**: The color treatment of error messages.

**$am-theme-error-400**: A lighter treatment for errors to draw contrast to the main error color.

**$am-theme-backdrop**: The background color of the document.

**$am-theme-paper**: The background color of Material Design "paper" elements such as cards. And other elements that overlap content.

**$am-theme-divider:** The color of tooling lines used to aid the eye when breaking down content.


**$am-theme-hint-text:** The text color for hints. Displays itself in helper text under inputs and other guiding copy

**$am-theme-secondary-text:**  A lighter text color for less important content.

**$am-theme-secondary-text-reverse:** A lighter text color for less important content on dark backgrounds.

**$am-theme-tertiary-text:** An even lighter text treatment for content less important than secondary text.

**$am-theme-icon:** The default color of icons.

**$am-theme-text:** The default color for all text.

**$am-theme-text-reverse:** The default color for all text on dark backgrounds.

## Font Variables

**$am-font-sans:** The font family used by active_material

**$am-font-weight-bold:** The weight of bold type

**$am-font-weight-semi-bold:** The weight of semi-bold type

**$am-font-weight-medium:** The weight of medium type

**$am-font-weight-regular:** The weight of regular type
