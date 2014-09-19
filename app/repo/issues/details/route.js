import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var repo = this.modelFor('repo');
    var issue_id = repo.get('id') + '/' + params.number;
    return this.store.find('issue',issue_id);
  }
});