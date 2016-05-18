# eslint-plugin-ember

Kickback's ESlint rules for Ember

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-kickback`:

**For a local version of eslint**
```
$ npm install eslint-plugin-kickback --save-dev
```

**For a global installation of eslint**
```
$ sudo npm install -g git+https://githubUsername:password@github.com/kickback/eslint-plugin-kickback.git
```
- If you're using  2FA for github (which you should be), you'll need to use a [personal access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
- You can use ssh for this, but sudo will make it a bit more difficult to pass in the ssh key properly, so usually its easier to go with access tokens 

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
