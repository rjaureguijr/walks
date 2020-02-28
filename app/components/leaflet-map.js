import Ember from 'ember';
export default Ember.Component.extend({
  attributeBindings: ['style'],
  width: '800px',
  height: '400px',
  latitude: '41.23',
  longitude: '2.09',
  zoom: '5',
  walks: [],

  style: function() {
    return [
    'width:' + this.get('width'),
    'height:' + this.get('height')
    ].join(';');
  }.property('width', 'height'),

  didInsertElement: function() {
    var walks = this.get('walks');
    var center = [this.get('latitude'), this.get('longitude')];
    var zoom   = this.get('zoom');
    var map = L.map(this.get('element'));

    this.set('map', map);

    // set the view to a given place and zoom
    map.setView(center, zoom);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    walks.forEach(function (walk, ind){

      var markers = [];

      walk._data.points.forEach(function (point, index){
        // add a marker in the given location, attach some
        // pop-up content to it, and open the pop-up
        L.marker(point.point.latitude,point.point.longitude)
        .addTo(map)
        .bindPopup(point.point.title)
        .openPopup();
      });
    });

  },

  willRemoveElement: function() {
    var map = this.get('map');
    if (map) { map.remove(); }
  }
});
