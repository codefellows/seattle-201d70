'use strict';

// get element from DOM - step one for adding an event listener
// first part of add event listener - get element fromt he DOM
// var myContainer = document.getElementById('container');
var parentEl = document.getElementById('results');

//step 3:  create event handler to do specific things when event is FIRED or RAISED
// event Handler
// takes in ONE parameter - the event
function handleClick(event){
  // console.log('the event', event);
  console.log('the event.target is ', event.target);
  console.log('the event.target.textContent ', event.target.textContent);
  console.log('the event.target.id is ', event.target.id);

  if (event.target.id === 'box-one'){
    var pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    parentEl.append(pEl);
  }

  if (event.target.id === 'box-two'){
    var pEl = document.createElement('p');
    pEl.textContent = 'clicked:  Box 2!';
    parentEl.append(pEl);
  }

  if (event.target.id === 'box-three'){
    var pEl = document.createElement('p');
    pEl.textContent = 'Box 3 done got clicked!';
    parentEl.appendChild(pEl);
  }

  if (event.target.id === 'container'){
    var pEl = document.createElement('p');
    pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
    parentEl.appendChild(pEl);
  }
}

// step 2: add event listener, we pass in two arguements!  event as string, and callback function
// 

// step 1:  get element by id to listen to container
var myForm = document.getElementById('container-two');

//step 3: event handler
function handleSubmit(event){
  event.preventDefault();

  var username = event.target.username.value;
  console.log(username);

  var pet = event.target.pet.value;
  console.log(pet);

  var word = event.target.word.value;
  console.log(word);


  // render store method
  // render footer

}
// step2: add event  listener
myForm.addEventListener('submit', handleSubmit);

