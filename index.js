// ## usage
//
// ```
// var textarea = require('hg-textarea')
// return h('form', [
//   input('name'),
//   input('email', { type: 'email' }),
//   textarea('comments')
// ])
//
var h = require('mercury').h
var capitalize = require('capitalize')
var xtend = require('xtend')

module.exports = function (s, o) {
  var a = s.split('.')
  var name = a.shift()
  var className = a.join(' ')
  var value = null

  if (o && o.value) {
    value = o.value
    delete o.value
  }

  var options = xtend({
    id: name,
    name: name,
    className: className
  }, o)
  return h('fieldset', [
    h('label', { htmlFor: name }, capitalize(name)),
    h('textarea', options, [value])
  ])
}
