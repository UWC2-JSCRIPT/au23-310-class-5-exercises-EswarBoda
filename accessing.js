// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headEl = document.getElementById('weather-head')
headEl.innerText =  'February 10 Weather Forecast, Seattle'

// Change the styling of every element with class "sun" to set the color to "orange"
const sunClassEl1 = document.querySelectorAll('.sun')
for (let i=0; i<sunClassEl1.length; i++) {
    sunClassEl1[i].style.color = 'orange'
}

// Change the class of the second <li> from to "sun" to "cloudy"
const liEls = document.getElementsByTagName('li')[1]
// change the second <li> class name using index 1
liEls.className = 'cloudy'