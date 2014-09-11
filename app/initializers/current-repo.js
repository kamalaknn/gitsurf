export default {
  name: 'current-repo',
  initialize: function(container,application) {
    application.inject('controller','currentRepo','meta:currentRepo');
    application.inject('route','currentRepo','meta:currentRepo');
    application.inject('adapter','currentRepo','meta:currentRepo');
    application.inject('serializer','currentRepo','meta:currentRepo');
  }
};