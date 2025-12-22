---
title: CSS syntax
short-title: Syntax
slug: Web/CSS/Guides/Syntax
page-type: css-module
spec-urls: https://drafts.csswg.org/css-syntax
sidebar: cssref
---

The **CSS syntax** module describes, in general terms, the structure and syntax of cascading stylesheets, or CSS. It defines CSS as the language for describing the rendering of structured documents (such as HTML and XML), on the web and elsewhere.

This module doesn't define any properties, [data types](/css/reference/values/Data_types), [functions](/css/reference/values/Functions), or [at-rules](/css/guides/Syntax/At-rules). Rather, it elaborates on how all of these features should be defined and how user agents should parse CSS.

## Reference

### At-rules and descriptors

- none

> [!NOTE]
> The module explicitly states that {{cssxref("@charset")}} is not an actual at-rule, but rather an unrecognized legacy rule that should be omitted when a stylesheet is grammar-checked. The only valid `@charset` usage is at the very beginning of a stylesheet, where it is interpreted as a special byte sequence stripped before processing the content.

### Key concepts

- {{cssxref("at-rule")}}
- [character escaping](/css/reference/values/custom-ident#escaping_characters)
- [CSS comments](/css/guides/Syntax/Comments)
- [CSS declaration](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS function](/css/reference/values/Functions)
- [Invalid](/css/guides/Syntax/Error_handling)
- [Style rule](/en-US/docs/Web/API/CSSStyleRule)

### Glossary terms

- {{glossary("CSS descriptor")}}
- {{glossary("Parse")}}
- {{glossary("Stylesheet")}}
- {{glossary("Whitespace")}}

## Guides

- [Introduction to CSS syntax: declarations, rulesets, and statements](/css/guides/Syntax/Introduction)
  - : Explains the overall CSS syntax and how declarations, declaration blocks, rulesets, and statements form the style rules.

- [Value definition syntax](/css/guides/Values_and_units/Value_definition_syntax)
  - : Explains the formal grammar for defining valid values for CSS properties and functions, along with semantic constraints. A guide for understanding CSS component value types, combinators, and multipliers.

- [CSS error handling](/css/guides/Syntax/Error_handling)
  - : Overview of how browsers handle invalid CSS.

- [Learn CSS first steps: CSS syntax](/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)
  - : Introductory guide to CSS, including an introduction to CSS syntax.

## Related concepts

[CSS selectors](/css/guides/Selectors) module:

- [CSS specificity](/css/guides/Cascade/Specificity)

[CSS cascading and inheritance](/css/guides/Cascade) module:

- {{cssxref("@import")}} at-rule
- {{cssxref("important")}} flag
- [Initial values](/css/guides/Cascade/Property_value_processing#initial_value)
- [Computed values](/css/guides/Cascade/Property_value_processing#computed_value)
- [Used values](/css/guides/Cascade/Property_value_processing#used_value)
- [Actual values](/css/guides/Cascade/Property_value_processing#actual_value)
- [CSS inheritance](/css/guides/Cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS property")}}

[CSS custom properties for cascading variables](/css/guides/Cascading_variables) module:

- [custom property (`--*`)](/css/reference/properties/--*)
- {{cssxref("var")}} function

[CSS conditional rules](/css/guides/Conditional_rules) module:

- {{cssxref("@media")}} at-rule
- {{cssxref("@supports")}} at-rule

[CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) API:

- {{domxref("CSSValue.cssText", "cssText")}} property
- {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}} method
- {{domxref("CSSStyleSheet.replace()", "replace(text)")}} method

[WHATWG](/en-US/docs/Glossary/WHATWG) specification:

- {{HTMLElement("style")}} element
- {{HTMLElement("link")}} element
- [`class`](/en-US/docs/Web/HTML/Reference/Global_attributes/class) attribute
- [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel#stylesheet) attribute

## Specifications

{{Specifications}}

## See also

- [CSS at-rule functions](/en-US/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS selectors](/css/guides/Selectors) module
- [CSS values and units](/css/guides/Values_and_units) module
