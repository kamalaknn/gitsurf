import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GitpodsENV.locationType
});

Router.map(function() {
  this.resource('repo', { path: 'repos/:owner.login/:name' });
});

export default Router;
