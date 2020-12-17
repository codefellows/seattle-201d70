'use strict';

// global variables
// all goats array
var allGoats = [];
var renderQueue = [];
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

Goat.prototype.logger = function (){
  console.log(this);
};

// all reference to goat instances is lost, AND we just have objects
var retrievedGoats = localStorage.getItem('goats');
if(retrievedGoats){
  allGoats = JSON.parse(retrievedGoats);
} else {
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
}
console.log(allGoats);


// DETERMINE WHICH GOATS GET VIEWED
// get random index - use getRamdomInt
// document:  this came from math.random MDN docs
function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// with two - we need validation - is goat unique?
// assign a src, alt, and title to image
function renderGoats() {
  while (renderQueue.length < 4) {
    var tempIndex = getRandomIndex(allGoats.length);
    while (renderQueue.includes(tempIndex)) {
      tempIndex = getRandomIndex(allGoats.length);
    }
    renderQueue.push(tempIndex);
  }

  var goatOneIndex = renderQueue.pop();
  var goatTwoIndex = renderQueue.pop();

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

    renderChart();
    // #3. save to local storage to persist completed datasets
    var stringifiedGoats = JSON.stringify(allGoats);
    localStorage.setItem('goats', stringifiedGoats);
  }
}


//executable code
// call a function that assigns the img srcs
// ? handle instatiations here?
renderGoats();

function renderChart(){
  var namesArray = [];
  var votesArray = [];
  var viewsArray = [];

  for (var i = 0; i < allGoats.length; i++){
    namesArray.push(allGoats[i].name);
    votesArray.push(allGoats[i].votes);
    viewsArray.push(allGoats[i].views);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var dataObject = {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: 'Number of Votes',
        data: votesArray,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 5
      },
      {
        label: 'Number of Views',
        data: viewsArray,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var myChart = new Chart(ctx, dataObject); //eslint-disable-line

}

// event listner attached to the container
myContainer.addEventListener('click', handleClick);

