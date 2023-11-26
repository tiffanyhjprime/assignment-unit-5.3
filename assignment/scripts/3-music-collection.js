console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//create an empty array named myCollection
let myCollection = [];

// Create a function named addToCollection with parameters collection, title, artist, yearPublished 

function addToCollection(collection, title, artist, yearPublished){

  const newMusic = { //take in the albums title, artist, yearPublished as parameters and create a new object
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newMusic); //add the new object to the end of the collection array
return newMusic;
};


//Use and Test the addToCollection function:






//Add 6 albums to the myCollection array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//console.log each album as added using the function's returned value.
//After all are added, console.log the myCollection array.
  




//return the newly created object























// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
