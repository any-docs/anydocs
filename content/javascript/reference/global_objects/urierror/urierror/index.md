---
title: URIError() constructor
short-title: URIError()
slug: Web/JavaScript/Reference/Global_Objects/URIError/URIError
page-type: javascript-constructor
browser-compat: javascript.builtins.URIError.URIError
sidebar: jsref
---

The **`URIError()`** constructor creates {{jsxref("URIError")}} objects.

## Syntax

```js
new URIError()
new URIError(message)
new URIError(message, options)
new URIError(message, fileName)
new URIError(message, fileName, lineNumber)

URIError()
URIError(message)
URIError(message, options)
URIError(message, fileName)
URIError(message, fileName, lineNumber)
```

> [!NOTE]
> `URIError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `URIError` instance.

### Parameters

- `message` <Badge type="info" text="Optional" />
  - : Human-readable description of the error.
- `options` <Badge type="info" text="Optional" />
  - : An object that has the following properties:
    - `cause` <Badge type="info" text="Optional" />
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` <Badge type="info" text="Optional" /> {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` <Badge type="info" text="Optional" /> {{non-standard_inline}}
  - : The line number of the code that caused the exception.

## Examples

### Catching a URIError

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a URIError

```js
try {
  throw new URIError("Hello");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
