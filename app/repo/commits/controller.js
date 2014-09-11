import Ember from 'ember';

export default Ember.ArrayController.extend({
  currentPage: 1,
  actions: {
    loadMore: function() {
      var page = this.incrementProperty('currentPage');
      this.store.findQuery('commit',{page:page});
    }
  }
});