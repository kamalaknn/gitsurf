import Ember from 'ember';
export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src','width','height','style'],
  classNameBindings: [':avatar-img'],
});