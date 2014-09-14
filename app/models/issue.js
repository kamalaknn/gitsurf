import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  body: DS.attr('string'),
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  
  //relationships
  repo: DS.belongsTo('repo')
});