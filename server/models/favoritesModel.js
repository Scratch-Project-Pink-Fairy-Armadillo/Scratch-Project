/**
 * READ: 
 * This file will contain all of the information regarding the schema of the
 * favorites depending on the user
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//favorites schema for each favorite FIGURE OUT WHAT WE NEED TO SAVE FROM THESE OBJECTS FETCHED FROM API
const favoritesSchema = new Schema({
    artId: {type: Number || String},
    title: {type: String},
    date_display: {type: String},
    artwork_type_title: { type: String},
    department_title: {type: String},
    department_id: {type: String},
    image_id: {type: String}
  });


//export schema 
const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites; 
