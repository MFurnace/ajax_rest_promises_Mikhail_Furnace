 //Write two functions to chain together. 
 //The first function, makeAllCaps, will take in an array of words and capitalize them. 
 //A second function, sortWords, will sort the words in alphabetical order. 
//If the array contains anything besides a single word (string), an error should be thrown.


const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
      if (
        words.every(word => {
          return typeof word === 'string';
        })
      ) {
        resolve(
          sortWords(
            words.map(word => {
              return word.toUpperCase();
            })
          )
        );
      } else {
        reject('Error!');
      }
    });
  };
  
  const sortWords = words => {
    return new Promise((resolve, reject) => {
      if (words) {
        resolve(words.sort());
      } else {
        reject('Error!');
      }
    });
  };
  
  const theseAreWords = ['taxonomy', 'idoneous', 'quidnunc'];
  
  makeAllCaps(theseAreWords)
    .then(sortWords(theseAreWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  const theseAreNotWords = [111, 'hello', 9];
  
  makeAllCaps(theseAreNotWords)
    .then(sortWords(theseAreNotWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));