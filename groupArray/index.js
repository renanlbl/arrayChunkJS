'use strict'
module.exports = function chunkArray(myArray, chunk_size){
    var tempArray = [];    
    for (var i = 0; i < myArray.length; i += chunk_size) {
        myChunk = myArray.slice(i, i+chunk_size);        
        tempArray.push(myChunk);
    }
    return tempArray;
}