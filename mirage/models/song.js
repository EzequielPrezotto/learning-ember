import {belongsTo, Model} from 'ember-cli-mirage'

export default Model.extend({
  band: belongsTo()
});
