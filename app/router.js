import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GitpodsENV.locationType
});

Router.map(function() {
  this.resource('repo', { path: '/:owner.login/:name' });
  this.resource('commit',{path:'/:owner.login/:name/commits'});
});

export default Router;
