var nameInput = document.querySelector('.header__input--name');
var changeNameButton = document.querySelector('.header__input--button');

changeNameButton.addEventListener('click', function() {
  document.querySelector('.header__span').innerHTML = (nameInput.value);
});


//WORKING CODE 1 - close to JS III lesson
// var header = document.querySelector('.header__span');
// var nameInput = document.querySelector('.header__input--name');
// console.log("var name", nameInput);
// var changeNameButton = document.querySelector('.header__input--button');
//
// changeNameButton.addEventListener('click', function() {
//   var name = nameInput.value;
//   document.querySelector('.header__span').innerHTML = (name);
// });

//WORKING CODE 2
// var changeNameButton = document.querySelector('.header__input--button');
// var nameInput = document.querySelector('.header__input--name');
//
// changeNameButton.addEventListener('click', function() {
//   document.querySelector('.header__span').innerHTML = (nameInput.value);
// });

//NOT WORKING - But i think it should
// var changeNameButton = document.querySelector('.header__input--button');
// var nameInput = document.querySelector('.header__input--name');
// var header = document.querySelector('.header__span');
//
// changeNameButton.addEventListener('click', function() {
//   document.querySelector(header).innerHTML = (nameInput.value);
// });
