import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
   this.route('orders');

   /*Displaying single order*/
   this.route('order', { path: '/orders/:order_id' });
});

export default Router;
