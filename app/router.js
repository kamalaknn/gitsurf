import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
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
  this.route('dummy');
});

export default Router;
