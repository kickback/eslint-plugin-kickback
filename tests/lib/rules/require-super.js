/**
 * @fileoverview Require calls to this._super() in beforeModel, etc.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/require-super"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

function validBlock(handlerName) {
  return `a = {
    ${handlerName}: function() {
      doStuff();
      this._super(...arguments);
    }
  }`
}

function invalidBlock(handlerName) {
  return `a = {
    ${handlerName}: function() {
      doStuff();
    }
  }`
}

function badCode() {
  return `a = {
    beforeModel: function() {
      this._super(...arguments);
    }
  }`
}

var handlerNames = ["beforeModel", "afterModel", "setupController", "init"];

var ruleTester = new RuleTester();
ruleTester.run("require-super", rule, {

    valid: handlerNames.map((handlerName) => {
      return {
        code: validBlock(handlerName),
        parser: 'babel-eslint'
      }
    }),

    invalid: handlerNames.map((handlerName) => {
      return {
        code: invalidBlock(handlerName),
        errors: [{
          message: handlerName + " must call `this._super(...arguments);`",
          type: "Property"
        }]
      }
    })
});
