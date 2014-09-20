import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var repo = this.modelFor('repo');
    var pull_id = repo.get('id') + '/' + params.number;
    return this.store.find('pull',pull_id);
  }
});