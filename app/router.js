import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GitpodsENV.locationType
});

Router.map(function() {
  this.route('repo', { path: '/:owner.login/:name' },function() {
    this.route('contributors');
    this.route('issues');
    this.route('issues.details',{path:'/issues/:number'});
    this.route('pulls');
    this.route('pulls.details',{path:'/pulls/:number'});
    this.route('commits');
    this.route('commits/details',{path:'/commits/:sha'});
  });
  this.route('user', {path: 'users/:login'});
});

export default Router;
