import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    window.console.log(this.currentRepo.get('id'));
    return this.store.find('issue');
  }
});