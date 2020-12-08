'use strict';

// global variables
// hours of operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// elements from DOM -- lists
var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList  = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');

// object literals
var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySalesArray: [],
  dailyTotal: 0,
  getRandomCustomerCount: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateHourlySales(){
    // iteratively, we are going to get a random number of custoemrs.  multiply  number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
    for (var i = 0; i < hours.length; i++){
      var customersForTheHour = this.getRandomCustomerCount();
      var hourlyTotal = Math.ceil(customersForTheHour * this.avg);
      // this.hourlySalesArray.push(hourlyTotal);  //either way.  this or below
      this.hourlySalesArray[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function(){
    this.populateHourlySales();

    //  iteratively render alist item
    for(var i = 0; i < hours.length; i++){
      //create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySalesArray[i]} cookies`;
      // append it to the DOM
      seattleList.appendChild(liElement);
    }
    // render the daily total
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
    // append it to the DOM
    seattleList.appendChild(liElement);
  }
};

var tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlySalesArray: [],
  dailyTotal: 0,
  getRandomCustomerCount: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateHourlySales(){
    // iteratively, we are going to get a random number of custoemrs.  multiply  number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
    for (var i = 0; i < hours.length; i++){
      var customersForTheHour = this.getRandomCustomerCount();
      var hourlyTotal = Math.ceil(customersForTheHour * this.avg);
      // this.hourlySalesArray.push(hourlyTotal);  //either way.  this or below
      this.hourlySalesArray[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function(){
    this.populateHourlySales();

    //  iteratively render alist item
    for(var i = 0; i < hours.length; i++){
      //create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySalesArray[i]} cookies`;
      // append it to the DOM
      tokyoList.appendChild(liElement);
    }
    // render the daily total
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
    // append it to the DOM
    tokyoList.appendChild(liElement);
  }
};

var dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  hourlySalesArray: [],
  dailyTotal: 0,
  getRandomCustomerCount: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateHourlySales(){
    // iteratively, we are going to get a random number of custoemrs.  multiply  number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
    for (var i = 0; i < hours.length; i++){
      var customersForTheHour = this.getRandomCustomerCount();
      var hourlyTotal = Math.ceil(customersForTheHour * this.avg);
      // this.hourlySalesArray.push(hourlyTotal);  //either way.  this or below
      this.hourlySalesArray[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function(){
    this.populateHourlySales();

    //  iteratively render alist item
    for(var i = 0; i < hours.length; i++){
      //create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySalesArray[i]} cookies`;
      // append it to the DOM
      dubaiList.appendChild(liElement);
    }
    // render the daily total
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
    // append it to the DOM
    dubaiList.appendChild(liElement);
  }
};

var paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  hourlySalesArray: [],
  dailyTotal: 0,
  getRandomCustomerCount: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateHourlySales(){
    // iteratively, we are going to get a random number of custoemrs.  multiply  number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
    for (var i = 0; i < hours.length; i++){
      var customersForTheHour = this.getRandomCustomerCount();
      var hourlyTotal = Math.ceil(customersForTheHour * this.avg);
      // this.hourlySalesArray.push(hourlyTotal);  //either way.  this or below
      this.hourlySalesArray[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function(){
    this.populateHourlySales();

    //  iteratively render alist item
    for(var i = 0; i < hours.length; i++){
      //create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySalesArray[i]} cookies`;
      // append it to the DOM
      parisList.appendChild(liElement);
    }
    // render the daily total
    // create element
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
    // append it to the DOM
    parisList.appendChild(liElement);
  }
};

var lima = {
  name: 'Lima',
  min:  2,
  max: 16,
  avg: 4.6,
  hourlySalesArray: [],
  dailyTotal: 0,
  getRandomCustomerCount: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateHourlySales(){
    // iteratively, we are going to get a random number of custoemrs.  multiply  number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
    for (var i = 0; i < hours.length; i++){
      var customersForTheHour = this.getRandomCustomerCount();
      var hourlyTotal = Math.ceil(customersForTheHour * this.avg);
      // this.hourlySalesArray.push(hourlyTotal);  //either way.  this or below
      this.hourlySalesArray[i] = hourlyTotal;
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function(){
    this.populateHourlySales();

    //  iteratively render alist item
    for(var i = 0; i < hours.length; i++){
      //create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySalesArray[i]} cookies`;
      // append it to the DOM
      limaList.appendChild(liElement);
    }
    // render the daily total
    liElement = document.createElement('li');
    // give it content
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
    // append it to the DOM
    limaList.appendChild(liElement);
  }
};


// executables
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


