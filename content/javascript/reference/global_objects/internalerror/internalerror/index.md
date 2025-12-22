---
title: InternalError() constructor
short-title: InternalError()
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
page-type: javascript-constructor
status:
  - non-standard
browser-compat: javascript.builtins.InternalError.InternalError
sidebar: jsref
---

{{Non-standard_Header}}

The **`InternalError()`** constructor creates {{jsxref("InternalError")}} objects.

## Syntax

```js
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

> [!NOTE]
> `InternalError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `InternalError` instance.

### Parameters

- `message` <Badge type="info" text="Optional" />
  - : Human-readable description of the error.
- `options` <Badge type="info" text="Optional" />
  - : An object that has the following properties:
    - `cause` <Badge type="info" text="Optional" />
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` <Badge type="info" text="Optional" /> {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception
- `lineNumber` <Badge type="info" text="Optional" /> {{non-standard_inline}}
  - : The line number of the code that caused the exception

## Examples

### Creating a new InternalError

```js
new InternalError("Engine failure");
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
