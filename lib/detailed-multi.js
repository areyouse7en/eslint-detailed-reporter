/**
 * @fileoverview Calls the template generator with the flag for generating multiple files set to true.
 * @author Marcelo S. Portugal <marceloquarion@gmail.com>
 */
'use strict'

const templateGenerator = require('./template-generator')

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

// https://eslint.org/docs/latest/extend/custom-formatters#the-results-argument
// results是lint结果，对象数组
module.exports = function (results) {
  return templateGenerator.generateTemplate(results, true)
}
