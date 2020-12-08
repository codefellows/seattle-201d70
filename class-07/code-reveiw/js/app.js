'use strict';



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// global variables
var hours = ['6am', '7am', '8am', '7pm'];

// 1st object - get it to work

var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,

  //successfully get random number between min and max provided
  getRandomNumber: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // populate hourlySales array
  calculateHourlySales(){
    console.log(this.getRandomNumber());
  },
  // render my list with total at the end
  render: function(){
    this.calculateHourlySales();

    // proof I can get here!
    console.log('inside render method');
    //do thething

  }
};

seattleStore.render();
