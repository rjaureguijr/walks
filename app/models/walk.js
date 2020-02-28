import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  categories: DS.attr('string'),
  title: DS.attr('string'),
  location: DS.attr('string'),
  points: DS.attr(),
  created_at: DS.attr('date')
});
