---
title: CSS anchor positioning
short-title: Anchor positioning
slug: Web/CSS/Guides/Anchor_positioning
page-type: css-module
spec-urls: https://drafts.csswg.org/css-anchor-position-1/
sidebar: cssref
---

# CSS anchor positioning

The **CSS anchor positioning** module defines features that allow you to tether elements together. Certain elements are defined as **anchor elements**; **anchor-positioned elements** can then have their size and position set based on the size and location of the anchor elements to which they are bound.

In addition, the specification provides CSS-only mechanisms to:

- Specify a set of alternative positions for an anchored element; when the default rendering position causes it to overflow its containing block and/or be rendered offscreen, the browser will try rendering the anchored element in the alternative positions instead.
- Declare conditions under which anchor-positioned elements should be hidden, in situations where it is not appropriate to tether them to anchor elements.

## Reference

### Properties

- [anchor-name](/css/reference/properties/anchor-name)
- [position-anchor](/css/reference/properties/position-anchor)
- [position-area](/css/reference/properties/position-area)
- [position-try-fallbacks](/css/reference/properties/position-try-fallbacks)
- [position-try-order](/css/reference/properties/position-try-order)
- [position-try](/css/reference/properties/position-try) shorthand
- [position-visibility](/css/reference/properties/position-visibility)

The CSS anchor positioning module also introduces the `anchor-scope` property. Currently, no browsers support this feature.

### At-rules and descriptors

- [@position-try](/css/reference/at-rules/@position-try)

### Functions

- [`anchor()`](/css/reference/values/anchor)
- [`anchor-size()`](/css/reference/values/anchor-size)

### Data types and values

- [`anchor-center`](/css/guides/anchor_positioning/using#centering-on-the-anchor-using-anchor-center)
- [`<anchor-side>`](/css/reference/values/anchor#anchor-side)
- [`<anchor-size>`](/css/reference/values/anchor-size#anchor-size)
- [`<position-area>`](/css/reference/values/position-area_value)
- [`<try-size>`](/css/reference/properties/position-try-order#try-size)
- [`<try-tactic>`](/css/reference/properties/position-try-fallbacks#try-tactic)

### HTML attributes

- [`anchor`](/en-US/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}

### Interfaces

- {{domxref("CSSPositionTryDescriptors")}}
- {{domxref("CSSPositionTryRule")}}
- {{domxref("HTMLElement.anchorElement")}} {{non-standard_inline}}

## Guides

- [Using CSS anchor positioning](/css/guides/Anchor_positioning/Using)
  - : An introductory guide to fundamental anchor positioning concepts, including associating, positioning, and sizing elements relative to their anchor.

- [Fallback options and conditional hiding for overflow](/css/guides/Anchor_positioning/Try_options_hiding)
  - : A guide to the mechanisms CSS anchor positioning provides to prevent anchor-positioned elements from overflowing their containing elements or the viewport, including position try fallback options and conditionally hiding elements.

## Related concepts

- [CSS logical properties and values](/css/guides/Logical_properties_and_values) module:
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-inline-start")}}
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-block")}}
  - {{cssxref("inset-inline")}}
  - {{cssxref("inset")}} shorthand
  - {{cssxref("inline-size")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("block-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - {{cssxref("margin-block")}}
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}}
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}
  - [Inset properties](/en-US/docs/Glossary/Inset_properties) glossary term
- [CSS positioned layout](/css/guides/Positioned_layout) module:
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [CSS box model](/css/guides/Box_model) module:
  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("margin")}}
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
- [CSS box alignment](/css/guides/Box_alignment) module:
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}

## Specifications

{{Specifications}}

## See also

- [CSS scroll anchoring](/css/guides/Scroll_anchoring) module
- [Learn: CSS positioning](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logical properties and values](/css/guides/Logical_properties_and_values) module
- [Learn: Sizing items in CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing)
