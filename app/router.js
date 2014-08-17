import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GitpodsENV.locationType
});

Router.map(function() {
  this.resource('repo', { path: '/:owner.login/:name' },function() {
    this.route('commits');
    this.route('commits/details',{path:'/commits/:sha'});
  });
});

export default Router;
