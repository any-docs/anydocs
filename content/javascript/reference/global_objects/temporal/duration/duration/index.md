---
title: Temporal.Duration()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/Duration
page-type: javascript-constructor
browser-compat: javascript.builtins.Temporal.Duration.Duration
sidebar: jsref
---

The **`Temporal.Duration()`** constructor creates {{jsxref("Temporal.Duration")}} objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other `Temporal` classes, you should usually construct `Temporal.Duration` objects using the {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} static method, which can handle a variety of input types.

## Syntax

```js
new Temporal.Duration()
new Temporal.Duration(years)
new Temporal.Duration(years, months)
new Temporal.Duration(years, months, weeks)
new Temporal.Duration(years, months, weeks, days)
new Temporal.Duration(years, months, weeks, days, hours)
new Temporal.Duration(years, months, weeks, days, hours, minutes)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds)
```

> [!NOTE]
> `Temporal.Duration()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `years` <Badge type="info" text="Optional" />
  - : Number of years, or `undefined` (which is treated as `0`).
- `months` <Badge type="info" text="Optional" />
  - : Number of months, or `undefined` (which is treated as `0`).
- `weeks` <Badge type="info" text="Optional" />
  - : Number of weeks, or `undefined` (which is treated as `0`).
- `days` <Badge type="info" text="Optional" />
  - : Number of days, or `undefined` (which is treated as `0`).
- `hours` <Badge type="info" text="Optional" />
  - : Number of hours, or `undefined` (which is treated as `0`).
- `minutes` <Badge type="info" text="Optional" />
  - : Number of minutes, or `undefined` (which is treated as `0`).
- `seconds` <Badge type="info" text="Optional" />
  - : Number of seconds, or `undefined` (which is treated as `0`).
- `milliseconds` <Badge type="info" text="Optional" />
  - : Number of milliseconds, or `undefined` (which is treated as `0`).
- `microseconds` <Badge type="info" text="Optional" />
  - : Number of microseconds, or `undefined` (which is treated as `0`).
- `nanoseconds` <Badge type="info" text="Optional" />
  - : Number of nanoseconds, or `undefined` (which is treated as `0`).

### Return value

A new `Temporal.Duration` object, possibly [unbalanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), with the specified components.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - Any of the parameters is not an integer (including non-finite values).
    - A [calendar unit](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (years, months, weeks) has an absolute value ≥ 2<sup>32</sup>.
    - The non-calendar part of the duration (days and below), when expressed in seconds, has an absolute value ≥ 2<sup>53</sup>.

## Examples

### Using Temporal.Duration()

```js
const d = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(d.toString()); // "P1Y2M3W4DT5H6M7.00800901S"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
