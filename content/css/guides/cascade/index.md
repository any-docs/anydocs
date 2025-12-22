---
title: CSS cascading and inheritance
short-title: Cascading and inheritance
slug: Web/CSS/Guides/Cascade
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-cascade/
  - https://drafts.csswg.org/css-cascade-5/
  - https://drafts.csswg.org/css-cascade-6/
sidebar: cssref
---

The **CSS cascading and inheritance** module defines the rules for assigning values to properties by way of cascading and inheritance. This module specifies the rules for finding the specified value for all properties on all elements.

One of the fundamental design principles of CSS is cascading of rules. It allows several style sheets to influence the presentation of a document. CSS property-value declarations define how a document is rendered. Multiple declarations may set different values for the same element and property combination, but only one value can be applied to any CSS property. The CSS cascade module defines how these conflicts are resolved.

The opposite also occurs. Sometimes there are no declarations defining the value of a property. The CSS cascade module defines how these missing values should be set via inheritance or from the property's initial value.

> [!NOTE]
> The rules for finding the specified values in the page context and its margin boxes are described in the [CSS page module](/css/guides/Paged_media).

## Reference

### Properties

- {{cssxref("all")}}

### At-rules and descriptors

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### Keywords

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("important", "!important")}} flag

### Interfaces

- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSRule")}}

### Glossary terms and definitions

- [Actual value](/css/guides/Cascade/Property_value_processing#actual_value)
- [Anonymous layer](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Author origin](/css/guides/Cascade/Introduction#author_stylesheets)
- [Cascade](/css/guides/Cascade/Introduction)
- [Computed value](/css/guides/Cascade/Property_value_processing#computed_value)
- [Initial value](/css/guides/Cascade/Property_value_processing#initial_value)
- [Named layer](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Resolved value](/css/guides/Cascade/Property_value_processing#resolved_value)
- [Shorthand properties](/css/guides/Cascade/Shorthand_properties)
- [Specificity](/css/guides/Cascade/Specificity)
- [Specified value](/css/guides/Cascade/Property_value_processing#specified_value)
- {{glossary("style origin")}}
- [Used value](/css/guides/Cascade/Property_value_processing#used_value)
- [User origin](/css/guides/Cascade/Introduction#user_stylesheets)
- [User-agent origin](/css/guides/Cascade/Introduction#user-agent_stylesheets)

## Guides

- [Introducing the CSS Cascade](/css/guides/Cascade/Introduction)
  - : Guide to the cascade algorithm that defines how user agents combine property values originating from different sources.

- [CSS inheritance](/css/guides/Cascade/Inheritance)
  - : A guide to CSS inheritance.

- [Learn: Handling conflicts](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : The most fundamental concepts of CSS — the cascade, specificity, and inheritance — which control how CSS is applied to HTML and how conflicts are resolved.

- [Learn: Cascade layers](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Introduction to [cascade layers](/en-US/docs/Web/CSS/Reference/At-rules/@layer), a more advanced feature that builds on the fundamental concepts of the [CSS cascade](/css/guides/Cascade/Introduction) and [CSS specificity](/css/guides/Cascade/Specificity).

## Related concepts

- [Element-attached styles](/en-US/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline styles and the cascade](/css/guides/Cascade/Introduction#inline_styles)
- [Conditional rules for @imports](/en-US/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_media_queries)
- [Value definition syntax](/css/guides/Values_and_units/Value_definition_syntax)

## Specifications

{{Specifications}}

## See also

- [CSS selectors module](/css/guides/Selectors)
- [CSS pseudo-elements module](/css/guides/Pseudo-elements)
- [CSS paged media module](/css/guides/Paged_media)
- [CSS conditional rules module](/css/guides/Conditional_rules)
- [CSS nesting module](/css/guides/Nesting)
- [Shorthand properties](/css/guides/Cascade/Shorthand_properties)
