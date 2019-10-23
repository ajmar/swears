const fs = require('fs');
const arrayToTxtFile = require('array-to-txt-file');
const swears_1 = require('./swears_1.js');
const swears_2 = require('./swears_2.js');
const swears_3 = fs.readFileSync('swears_3.txt').toString().split("\n");

let swears = [
	...swears_1,
	...swears_2,
	...swears_3
]

/* Make the array all lowercase */
swears = swears.map(e => e.toLowerCase());

/* Remove (exact) duplicate elements from the array */
var present = {};
swears = swears.filter((i) => {
	return present.hasOwnProperty(i) ? false : (present[i] = true);
});

/* Write the array to a file */
arrayToTxtFile(swears, './output.txt', err => {
    if(err) {
      console.error(err)
      return
    }
    console.log('Successfully wrote to txt file.')
});
