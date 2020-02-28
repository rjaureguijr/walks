import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('walks', function(){
    this.resource('walk', { path: '/:walk_id'});
  });
});

export default Router;
