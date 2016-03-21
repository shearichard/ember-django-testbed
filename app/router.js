import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('student');
  //this.route('species');
  //this.route('rose');
  this.route('rose');
  this.route('roses', function(){
    this.route('rose', {path: '/:id'});
  });
  this.route('species', function(){
    this.route('specie', {path: '/:specie_id'});
  });
});

export default Router;
