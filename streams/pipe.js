let request = require('request')
let fs = require('fs')
let zlib = require('zlib')

/* -----------------EXAMPLE 1------------------------- */
// let s = request('http://www.pluralsight.com/')
// s.pipe(process.stdout)

// OR //

// request('http://www.pluralsight.com/').pipe(process.stdout)
/* ------------------------------------------ */

/* ----------------EXAMPLE 2-------------------------- */
// To pipe something to the file system:

// request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'))  // THIS WILL DOWNLOAD A WEBPAGE AND SAVE IT TO A FILE CALLED pluralsight.html
/* ------------------------------------------ */

/* ----------------EXAMPLE 3-------------------------- */
// This is basically the same as above, but it makes a gzip of the file
request('http://pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'))

/* ------------------------------------------ */
