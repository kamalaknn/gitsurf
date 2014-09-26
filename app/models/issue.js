import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  body: DS.attr('string'),
  title: DS.attr('string'),
  
  //relationships
  user: DS.belongsTo('user', { async: true }),
  repo: DS.belongsTo('repo')
});