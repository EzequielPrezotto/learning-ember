// app/models/song.js
export default class Song {
  // constructor({ title, rating, band }) {
  constructor({ id, title, rating, band }, relationships={}) {
    this.id = id;
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
    this.relationships = relationships;
  }
}
