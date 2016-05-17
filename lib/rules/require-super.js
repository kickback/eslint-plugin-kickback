/**
 * @fileoverview Require calls to this._super() in beforeModel, etc.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  var emberHandlers = ["beforeModel", "afterModel", "setupController", "init"];
  var expectedText = "this._super(...arguments);";
  var acceptableCalls = [expectedText, "return " + expectedText];

  //--------------------------------------------------------------------------
  // Public
  //--------------------------------------------------------------------------

  return {
    Property: function(node) {
      if (emberHandlers.indexOf(node.key.name) > -1) {
        var callToSuper = node.value.body.body.find(function(n) {
          if (n.type === "ExpressionStatement" || n.type === "ReturnStatement") {
            var source = context.getSourceCode().getText(n);
            return acceptableCalls.indexOf(source) > -1;
          }
        });

        if (!callToSuper) {
          context.report(node, node.key.name + " must call `this._super(...arguments);`");
        }
      }
    }
  };
};

module.exports.schema = [];
