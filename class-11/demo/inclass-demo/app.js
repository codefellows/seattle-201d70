'use strict';

// global variables
// all goats array
var allGoats = [];
// I can easily adjust my max with this variable
var maxClicksAllowed = 15;
var actualClicks = 0;

// get some ids from the DOM
var myContainer = document.getElementById('container');
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var resultsList = document.getElementById('results');

// goat constructor
// properties = src name/alt/tile views clicks
function Goat(name, src = 'jpg') {
  this.name = name; //'bunny-goat'
  this.src = `img/${name}.${src}`; // 'img/bunny-goat.jpg'
  this.views = 0;
  this.votes = 0;
  allGoats.push(this);
}

// instantiations!!
new Goat('bunny-goat');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('lucky-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

// DETERMINE WHICH GOATS GET VIEWED
// get random index - use getRamdomInt
// document:  this came from math.random MDN docs
function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// with two - we need validation - is goat unique?
// assign a src, alt, and title to image
function renderGoats() {
  var goatOneIndex = getRandomIndex(allGoats.length);
  var goatTwoIndex = getRandomIndex(allGoats.length);
  // validation
  // todays lab will include 3 images!  this won't work!  recommend an array, AND while something is included in the array, perhaps do a thing.  OR  while something is NOT in the array, do a thing.  what will the length of that array be?  maybe this is a renderQueue?  maybe this is where the three image indexes about to be rendered live?  maybe a seperate helper function to populate that array - doesn't have to be
  while (goatOneIndex === goatTwoIndex) {
    goatTwoIndex = getRandomIndex(allGoats.length);
  }

  // assign goat info
  imageOneElement.src = allGoats[goatOneIndex].src;
  imageOneElement.alt = allGoats[goatOneIndex].name;
  imageOneElement.title = allGoats[goatOneIndex].name;
  // log the view - views start at 0 and get incremented with every view
  // example:  allGoats[1].views++;
  allGoats[goatOneIndex].views++;

  imageTwoElement.src = allGoats[goatTwoIndex].src;
  imageTwoElement.alt = allGoats[goatTwoIndex].name;
  imageTwoElement.title = allGoats[goatTwoIndex].name;
  allGoats[goatTwoIndex].views++;

}


// event handler
function handleClick(event) {
  // console.log(event);
  actualClicks++;
  var clickedGoat = event.target.title;
  console.log(clickedGoat);

  //keep track of WHICH image and number of clicks. increment the correct clicks/vote/like property.
  for (var i = 0; i < allGoats.length; i++) {
    if (clickedGoat === allGoats[i].name) {
      allGoats[i].votes++;
    }
  }
  // reassign image src properties - call that function again
  renderGoats();

  // validation for when we hit our max clicks
  if (actualClicks === maxClicksAllowed) {
    // WHEN WE HIT OUR MAX CLICKS:
    // #1. remove eventListener
    myContainer.removeEventListener('click', handleClick);
    // #2. show results - render one list with string including name, views, and votes
    for (var j = 0; j< allGoats.length; j++){
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${allGoats[j].name} was viewed ${allGoats[j].views} times and clicked ${allGoats[j].votes} times`;
      //append it to the DOM
      resultsList.appendChild(liElement);

    }
  }
}


//executable code
// call a function that assigns the img srcs
renderGoats();

// event listner attached to the container
myContainer.addEventListener('click', handleClick);

