---
title: CSS values and units
short-title: Values and units
slug: Web/CSS/Guides/Values_and_units
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-values-3/
  - https://drafts.csswg.org/css-values-4/
  - https://drafts.csswg.org/css-values-5/
sidebar: cssref
---

Every CSS declaration consists of a property/value pair. The value can take various forms depending on the property, such as a single integer, keyword, function, or a combination of different items; some values have units, while others do not. Every property also accepts the CSS-wide values. The CSS values and units module defines the data types — values and units — that CSS properties accept. This module also defines the CSS value definition syntax, or formal grammar, used to define the set of valid values for every CSS property and function.

> [!NOTE]
> This page introduces a CSS module. To find an exhaustive list of all values, types, and functions defined by CSS specifications, see the [values](/css/reference/values) reference page.

## Reference

### Properties

- {{cssxref("interpolate-size")}}

### Functions

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("progress()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

The CSS values and units module also introduces the `calc-mix()`, `crossorigin()`, `first-valid()`, `integrity()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()`, and `toggle()` functions. Currently, no browsers support these features.

### Data types

- {{cssxref("angle-percentage")}}
- {{cssxref("angle")}}
- [`<attr-name>`](/css/reference/values/attr#attr-name)
- [`<attr-type>`](/css/reference/values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/css/reference/values/calc-size#calc-size-basis)
- {{cssxref("calc-sum")}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("easing-function")}}
- {{cssxref("ident")}}
- {{cssxref("integer")}}
- {{cssxref("length-percentage")}}
- {{cssxref("length")}}
- {{cssxref("number")}}
- {{cssxref("percentage")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("resolution")}}
- [`<rounding-strategy>`](/css/reference/values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- {{cssxref("string")}}
- [`<syntax>`](/css/guides/Syntax/Introduction)
- {{cssxref("time-percentage")}}
- {{cssxref("time")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- [`<url-modifier>`](/css/reference/values/url_function#url-modifier)

The CSS values and units module also introduces the {{cssxref("frequency")}} and {{cssxref("frequency-percentage")}} data types. Currently, no browsers support these features.

#### Units

- [`%` (percentage)](/css/reference/values/percentage)
- [`cap`](/css/reference/values/length#cap)
- [`ch`](/css/reference/values/length#ch)
- [`cm`](/css/reference/values/length#cm)
- [`deg`](/css/reference/values/angle#deg)
- [`dpcm`](/css/reference/values/resolution#dpcm)
- [`dpi`](/css/reference/values/resolution#dpi)
- [`dppx`](/css/reference/values/resolution#dppx)
- [`dvb`](/css/reference/values/length#vb)
- [`dvh`](/css/reference/values/length#vh)
- [`dvi`](/css/reference/values/length#vi)
- [`dvmax`](/css/reference/values/length#vmax)
- [`dvmin`](/css/reference/values/length#vmin)
- [`dvw`](/css/reference/values/length#vw)
- [`em`](/css/reference/values/length#em)
- [`ex`](/css/reference/values/length#ex)
- [`grad`](/css/reference/values/angle#grad)
- [`Hz`](/css/reference/values/frequency#hz)
- [`ic`](/css/reference/values/length#ic)
- [`in`](/css/reference/values/length#in)
- [`kHz`](/css/reference/values/frequency#khz)
- [`lh`](/css/reference/values/length#lh)
- [`lvb`](/css/reference/values/length#vb)
- [`lvh`](/css/reference/values/length#vh)
- [`lvi`](/css/reference/values/length#vi)
- [`lvmax`](/css/reference/values/length#vmax)
- [`lvmin`](/css/reference/values/length#vmin)
- [`lvw`](/css/reference/values/length#vw)
- [`mm`](/css/reference/values/length#mm)
- [`ms`](/css/reference/values/time#ms)
- [`pc`](/css/reference/values/length#pc)
- [`pt`](/css/reference/values/length#pt)
- [`px`](/css/reference/values/length#px)
- [`Q`](/css/reference/values/length#q)
- [`rad`](/css/reference/values/angle#rad)
- [`rcap`](/css/reference/values/length#rcap)
- [`rch`](/css/reference/values/length#rch)
- [`rem`](/css/reference/values/length#rem)
- [`rex`](/css/reference/values/length#rex)
- [`ric`](/css/reference/values/length#ric)
- [`rlh`](/css/reference/values/length#rlh)
- [`s`](/css/reference/values/time#s)
- [`svb`](/css/reference/values/length#vb)
- [`svh`](/css/reference/values/length#vh)
- [`svi`](/css/reference/values/length#vi)
- [`svmax`](/css/reference/values/length#vmax)
- [`svmin`](/css/reference/values/length#vmin)
- [`svw`](/css/reference/values/length#vw)
- [`turn`](/css/reference/values/angle#turn)
- [`vb`](/css/reference/values/length#vb)
- [`vh`](/css/reference/values/length#vh)
- [`vi`](/css/reference/values/length#vi)
- [`vmax`](/css/reference/values/length#vmax)
- [`vmin`](/css/reference/values/length#vmin)
- [`vw`](/css/reference/values/length#vw)
- [`x`](/css/reference/values/resolution#x)

[Flex units](/css/guides/Values_and_units/Numeric_data_types#flex_units) (`fr`) and [container units](/css/guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) are defined in the [CSS grid layout](/css/guides/Grid_layout) and [CSS conditional rules](/css/guides/Conditional_rules) modules, respectively.

#### Unit categorizations

- [Absolute length units](/css/guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Angle units](/css/guides/Values_and_units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Default viewport units](/css/reference/values/length#default_viewport_units) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Dynamic viewport units](/css/reference/values/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequency units](/css/guides/Values_and_units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Large viewport-percentage units](/css/reference/values/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Local font-relative length units](/css/guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Physical units](/css/guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative length units](/css/guides/Values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Resolution units](/css/guides/Values_and_units/Numeric_data_types#resolution_units) (`dpcm`, `dpi` , `dppx`, `x`)
- [Root font-relative length units](/css/guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Small viewport-percentage unit](/css/reference/values/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Time units](/css/guides/Values_and_units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport units](/css/guides/Values_and_units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Visual angle unit](/css/guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`)

### Key concepts

- {{glossary("Advance measure")}}
- [Bracketed range notation](/css/guides/Values_and_units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Component value combinators](/css/guides/Values_and_units/Value_definition_syntax#component_value_combinators)
- [CSS-wide keywords](/css/reference/values/Data_types#css-wide_keywords)
- {{glossary("Device pixel")}}
- [Functional notation](/css/reference/values/Functions)
- {{glossary("Identifier")}}
- {{glossary("Interpolation")}}
- {{glossary("Keyword")}}
- [Math function](/css/guides/Values_and_units/Using_math_functions)
- [Numeric data types](/css/guides/Values_and_units/Numeric_data_types)
- {{glossary("Origin")}}
- {{glossary("Pixel")}}
- [Textual data types](/css/guides/Values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [Value definition syntax](/css/guides/Values_and_units/Value_definition_syntax)

## Guides

- [CSS data types](/css/reference/values/Data_types)
  - : Introduction to CSS data types that define typical values accepted by CSS properties and functions.

- [Numeric data types](/css/guides/Values_and_units/Numeric_data_types)
  - : Overview of the numeric data types, including integers, numbers, percentages, and dimensions, along with relative and absolute dimensions, angles, and time units.

- [Textual data types](/css/guides/Values_and_units/Textual_data_types)
  - : Overview of the textual data types, including pre-defined keyword values, global CSS keyword values, and URLs.

- [CSS value functions](/css/reference/values/Functions)
  - : Overview of the CSS statements that invoke special data processing or calculations to return a CSS value for a CSS property.

- [Using CSS math functions](/css/guides/Values_and_units/Using_math_functions)
  - : The CSS math functions that allow a property value to be written as a mathematical expression.

- [Value definition syntax](/css/guides/Values_and_units/Value_definition_syntax)
  - : The formal grammar used to define the set of valid values for CSS properties and functions.

- [Using CSS typed arithmetic](/css/guides/Values_and_units/Using_typed_arithmetic)
  - : An explanation of CSS typed arithmetic behavior and use cases enabled by it.

- [Learn: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : A look at some of the most frequently used value types, what they are, and how they work.

- [CSS value serialization](/en-US/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - : How [CSSOM APIs](/en-US/docs/Web/API/CSS_Object_Model) serialize color and other values into standardized string representations.

## Related

- [CSS cascading and inheritance](/css/guides/Cascade) module
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS grid layout](/css/guides/Grid_layout) module
  - {{cssxref("&lt;flex&gt;")}}
  - [Flex units](/css/guides/Values_and_units/Numeric_data_types#flex_units) (`fr`)

- [CSS conditional rules](/css/guides/Conditional_rules) module
  - [Container units](/css/guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- [CSS colors](/css/guides/Colors) module
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/css/reference/values/color_value/color-mix)

- [CSS images](/css/guides/Images) module
  - {{cssxref("image")}}
  - {{cssxref("gradient")}}

## Specifications

{{Specifications}}

## See also

- [CSS syntax](/css/guides/Syntax) module
- [CSS selectors](/css/guides/Selectors) module
