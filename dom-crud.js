// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const mainEl = document.getElementsByTagName('main')[0];

const pEl = document.getElementsByTagName('p')[0];

const aEl = document.createElement('a');
aEl.id = 'cta';
aEl.innerText = 'Buy Now!';
mainEl.insertBefore(aEl, pEl);


// Access (read) the data-color attribute of the <img>,
// log to the console
const imgEl = document.getElementsByTagName('img')[0];
const color = imgEl.dataset.color;
console.log('img color attribute value: ', color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const ulEl = document.getElementsByTagName('ul')[0];
ulEl.children[2].className = 'highlight';
//ulEl.children[2].innerText = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
mainEl.removeChild(pEl);