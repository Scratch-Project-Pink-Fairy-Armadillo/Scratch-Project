/**
 * READ: 
 * This file will contain all of the information regarding create, reading
 * updating, and delete favorites 
 */
//**TODO: aquire favorites model 
const favoritesModel = require('./favoritesModel')
//**TODO: create favorites object 
const favorites = {
   //**TODO: Create a method to store the data when the user favorits something 
   createFavorite(res, req, next){

  },
  //**TODO: Create a method when the user updates the favorits? 
  //? Frontend may need to impelment an eventhandler to handle this event
  updateFavorites(res, req, next){ 

  },
  //**TODO: Create a mehtod when the user wants the find a certin favorite
  findFavorites(res, req, next){

  },
  //**TODO: Create a method whe the user wants to delete the favorite 
  deleteFavorite(res, req, next){

  }, 
  
};
 
  //**TODO: export controller 
  modules.exports = favoritesModel; 