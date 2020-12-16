# Lab 11 Demo Insructions

## Problem Domain

You have been hired to build an app that helps users determine the cutest goat picture out of a collection of 9 photographs.  Your app will randomly display two of these unique pictures at a time, the user should be able to click on their favorite.  Once clicked, the images will rerender another set of random pictures.  Although it is acceptable for the pictures to be shown back to back on today's iteration of this app, the two pictures rendered may not be the same.  

after choosing your favorite goat 15 times, the voting session will conclude and the app will render a list showing all of the goats names, the number of times they were viewed, and the number of clicks the received.

### Brainstormings and other ideas

#### what do we need?
- eventhandler (click)
- for loop ? 
- all instance pushed into an allGoats array
- if in an array(sllGoats), can use index number - use randomIndexGenerator.  based on the length of array - enter `allGoats.length` as parameter
- store the images in an array (what else do we need to store)
- store number of clicks received, number of views of each image
- this sounds like PROPERTIES on AN OBJECT
- constructor? 
  - name / alt / title
  - img src
  - clicks
  - views
- while / if /else logic to get two unique images
- count the number of total clicks - 15 max
- render list - for loop
- remove event handler (listener)