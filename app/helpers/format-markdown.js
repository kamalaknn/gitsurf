import Ember from 'ember';

var showdown = new window.Showdown.converter();

function formatMarkdown(value) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(value));
}

export { formatMarkdown };

export default Ember.HTMLBars.makeBoundHelper(formatMarkdown);
