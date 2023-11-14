// If an li element is clicked, toggle the class "done" on the <li>
const mainEl = document.getElementsByTagName('main')[0];
const ulEl = document.getElementsByClassName('today-list')[0];

// Set draggable to true for the existing li element.
// All the new li elements will be created with draggable property set
ulEl.firstElementChild.draggable = true;

mainEl.addEventListener('click', (e) => {
  e.target.parentNode.className = 'done';

  // Use the same parent listener for deleting the li element
  if (e.target.className === 'delete') {
    ulEl.removeChild(e.target.parentNode);
  }
});

// If a delete link is clicked, delete the li element / remove from the DOM
// NOTE: THIS CODE IS ALSO COMBINED INTO THE ABOVE EVENT LISTENER

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  //const input = this.parentNode.getElementsByTagName('input')[0];
  const input = document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  if (text !== '') { // This check will avoid empty cliks in the text box to add a new empty li item
    // create, and add child <li> element to <ul>
    const ulEl = document.getElementsByClassName('today-list')[0];
    const liEl = document.createElement('li');
    liEl.draggable = true; // set draggable property
    ulEl.appendChild(liEl);

    // create, and add child <span> element to <li>
    const spanEl = document.createElement('span');
    spanEl.appendChild(document.createTextNode(text));
    liEl.appendChild(spanEl);

    // create, and add child <a> element to <li>
    const aEl = document.createElement('a');
    aEl.appendChild(document.createTextNode('Delete'));
    aEl.className = 'delete';
    liEl.appendChild(aEl);
  }

  input.value = ''; // After adding new li element, clear out the text box for next entries
};

const addEl = document.getElementsByClassName('add')[0];
addEl.addEventListener('click', (e) => {
  addListItem(e);
});

// Add event listeners for drag and drop events
ulEl.addEventListener('dragstart', handleDragStart);
ulEl.addEventListener('dragover', handleDragOver);
ulEl.addEventListener('drop', handleDrop);

// initialize draggedItem to null
let draggedItem = null;

// Drag start event handler
function handleDragStart(e) {
  draggedItem = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', draggedItem.innerHTML);
}

// Drag over event handler
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const targetItem = e.target;
  if (targetItem !== draggedItem && targetItem.classList.contains('today-list')) {
    const boundingRect = targetItem.getBoundingClientRect();
    const offset = boundingRect.y + (boundingRect.height / 2);
   if (e.clientY - offset > 0) {
      targetItem.style.borderTop = '';
    } else {
      targetItem.style.borderBottom = '';
    }
  }
}

// Drop start event handler
function handleDrop(e) {
  e.preventDefault();
  const targetItem = e.target;
  if (targetItem !== draggedItem && targetItem.classList.contains('today-list')) {
    if (e.clientY > targetItem.getBoundingClientRect().top + (targetItem.offsetHeight / 2)) {
      targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
    } else {
      targetItem.parentNode.insertBefore(draggedItem, targetItem);
    }
  }
  draggedItem = null;
}
