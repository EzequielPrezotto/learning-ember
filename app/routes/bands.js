import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import wait from 'rarwee/utils/wait'

export default class BandsRoute extends Route {
  @service catalog;

  // async model() {
  //   let response = await fetch('/bands');
  //   let json = await response.json();
  //   for (let item of json.data) {
  //     let { id, attributes, relationships } = item;
  //     let rels = {};
  //     for (let relationshipName in relationships) {
  //       rels[relationshipName] =
  //         relationships[relationshipName].links.related;
  //     }
  //     let record = new Band({ id, ...attributes }, rels);
  //     this.catalog.add('band', record);
  //   }
  //   return this.catalog.bands;
  // }


  async model() {
    await wait(3000);
    return this.catalog.fetchAll('bands');
  }

}
