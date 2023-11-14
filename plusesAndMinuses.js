// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;

// Create Plus button, and add it to the DOM
const plusBtn = document.createElement('BUTTON');
plusBtn.id = 'plus';
const plusText = document.createTextNode('+');
plusBtn.appendChild(plusText);
document.body.appendChild(plusBtn);

document.write('</br>');
document.write('</br>');

// Create Minus button, and add it to the DOM
const minusBtn = document.createElement('BUTTON');
minusBtn.id = 'minus';
const minusText = document.createTextNode('-');
minusBtn.appendChild(minusText);
document.body.appendChild(minusBtn);

document.write('</br>');

// Create count display, and add it to the DOM
const count = document.createElement('h1');
count.id = 'count';
const countText = document.createTextNode(counter); // counter starts with 0
count.appendChild(countText);
document.body.appendChild(count);

const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
const countEl = document.getElementById('count');

// Increment, decrement function
function incrementDecrement(increase) {
    if (increase) {
        counter++;
    } else {
        counter--;
    }
    countEl.innerHTML = counter;
    console.log('count is: ', counter);
}

// Add event listener for the plus button
plusEl.addEventListener('click', () => incrementDecrement(true));

// Add event listener for the minus button
minusEl.addEventListener('click', () => incrementDecrement(false));

// Best practice: Remove the event listener in the end
//plusEl.removeEventListener('click', incrementDecrement;
//minusEl.removeEventListener('click', incrementDecrement;