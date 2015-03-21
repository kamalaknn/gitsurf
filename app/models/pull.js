import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  state: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  user: DS.belongsTo('user', { async: true, inverse: null }),
  
  //relationships
  repo: DS.belongsTo('repo')
});