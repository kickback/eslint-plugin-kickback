# eslint-plugin-ember

Kickback's ESlint rules for Ember

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-kickback`:

```
$ npm install eslint-plugin-kickback --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-kickback` globally.

## Usage

Add `ember` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "kickback"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ember/rule-name": 2
    }
}
```

## Supported Rules

* require-super
