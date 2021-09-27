import EmberRouter from '@ember/routing/router';
import config from 'rarwee/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('bands');
  // this.route('songs');
  this.route('bands', function () {
    // this.route('songs');

    // this.route('band', {
    //   path: ':id'
    this.route('band', { path: ':id' }, function () {
      this.route('songs');
    });
    this.route('new');
  });
});
