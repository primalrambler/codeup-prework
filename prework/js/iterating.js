(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Jerry', 'Elaine','George','Kramer'];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log('There are ' + names.length + ' names in the array');

    // TODO: Create log statements that will print each of the names array elements individually.

/* previous version    var i = 0

    while (i < names.length) {
    	console.log(names[i]);
    	i++;
    }
*/

names.forEach(function(element){
    console.log(element);
});


})();
