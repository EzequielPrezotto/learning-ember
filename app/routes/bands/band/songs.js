// app/routes/bands/band/songs.js
import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import wait from 'rarwee/utils/wait'

export default class BandsBandSongsRoute extends Route {
  @service catalog;

  queryParams = {
    sortBy: {
      as: 's',
    },
    searchTerm: {
      as: 'term',
    },
  }

  async model() {
    let band = this.modelFor('bands.band');
    // let url = band.relationships.songs;
    // let response = await fetch(url);
    // let json = await response.json();
    // let songs = [];
    // for (let item of json.data) {
    //   let { id, attributes, relationships } = item;
    //   let rels = {};
    //   for (let relationshipName in relationships) {
    //     rels[relationshipName] =
    //       relationships[relationshipName].links.related;
    //   }
    //   let song = new Song({ id, ...attributes }, rels);
    //   songs.push(song);
    //   this.catalog.add('song', song);
    // }
    // band.songs = songs;

    await wait(3000)
    await this.catalog.fetchRelated(band, 'songs');
    return band;

    // return Promise.reject()
  }

  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
