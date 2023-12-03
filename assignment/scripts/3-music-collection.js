console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//create an empty array named myCollection
let myCollection = [];

// Create a function named addToCollection with parameters collection, title, artist, yearPublished 

function addToCollection( myCollection, title, artist, yearPublished){

  const newMusic = { //take in the albums title, artist, yearPublished as parameters and create a new object
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  myCollection.push(newMusic); //add the new object to the end of the collection array
return newMusic;
};


//Use and Test the addToCollection function:
addToCollection(myCollection, "Something In the Orange", "Zach Bryan", 2023);
addToCollection( myCollection, "Cruel Summer", "Taylor Swift", 2022);
addToCollection( myCollection, "Wait So Long", "Trampled by Turtles", 2009);
addToCollection( myCollection, "Thriller", "Michael Jackson", 1987);
addToCollection( myCollection, "Show Love", "Kiana Lede", 2018);
addToCollection( myCollection, "For Tonight", "Giveon", 2022);


console.log("Testing myCollection[0]", myCollection[0]);
console.log("Testing myCollection[1]", myCollection[1]);
console.log("Testing myCollection[2]", myCollection[2]);
console.log("Testing myCollection[3]", myCollection[3]);
console.log("Testing myCollection[4]", myCollection[4]);
console.log("Testing myCollection[5]", myCollection[5]);


//Create a function named showCollection. 
function showCollection(album){
  //Take in a collection parameter album's information formatted within a single string, like: TITLE by ARTIST, published in YEAR.
  //Loop through the collection and console.log each
  //information formatted within a single string, like: TITLE by ARTIST, published in YEAR.
  
  for(let i = 0; i < album.length; i++){
    console.log(`${album[i].title} by ${album[i].artist}, published in ${album[i].yearPublished}`);
  }
}
//Test the showCollection function.
showCollection(myCollection);


// Create a function to search collection by artist(string)
function findByArtist(collection, artist) {
  let results = [];
  for (let musician of collection) {
    if (musician.artist === artist) {
      results.push(musician);
      console.log("who are the artists", results)
    }
  }
  return results;
}

findByArtist(myCollection);




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
