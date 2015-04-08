var test = require('tap').test
var textarea = require('../')
var h = require('mercury').h

test('basic textarea', function(t) {
  t.deepEquals(
    h('fieldset', [
      h('label', { htmlFor: 'body' }, 'Body'),
      h('textarea.u-full-width', { id: 'body', name: 'body' })
    ]),
    textarea('body.u-full-width')
  )
  t.end()
})

test('textarea with value', function(t) {
  t.deepEquals(
    h('fieldset', [
      h('label', { htmlFor: 'body' }, 'Body'),
      h('textarea.u-full-width', { id: 'body', name: 'body' }, ['Beep Boop'])
    ]),
    textarea('body.u-full-width', { value: 'Beep Boop' })
  )
  t.end()
})
