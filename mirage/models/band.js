import {hasMany, Model} from 'ember-cli-mirage'

export default Model.extend({
  songs: hasMany()
});
