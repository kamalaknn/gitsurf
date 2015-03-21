import Ember from 'ember';
import { test, module } from 'qunit';
import { formatMarkdown } from 'gitpods/helpers/format-markdown';

module('FormatMarkdownHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = formatMarkdown('##Some markdown');
  assert.ok(result);
});
