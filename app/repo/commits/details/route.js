import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var repo = this.modelFor('repo');
    var commit_id = repo.get('id') + '/' + params.sha;
    return this.store.find('commit',commit_id);
  }
});