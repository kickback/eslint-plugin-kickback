# Require calls to this._super() in beforeModel, etc. (require-super)

## Rule Details

The following patterns are considered warnings:

```js
beforeModel: function() {
  doStuff();
}
```

The following patterns are not warnings:

```js
beforeModel: function() {
  this._super(...arguments);
  doStuff();
}
```
