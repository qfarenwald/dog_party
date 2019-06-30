var header = document.querySelector('.header__span');
var nameInput = document.querySelector('.header__input--name');
console.log("var name", nameInput);
var changeNameButton = document.querySelector('.header__input--button');

changeNameButton.addEventListener('click', function () {
    var name = nameInput.value;
    document.querySelector('.header__span').innerHTML = (name);
});

// var colorInput = document.querySelector('#color');
// var getColorButton = document.querySelector('.get-color');
//
// getColorButton.addEventListener('click', function () {
//   var color = colorInput.value;
//   console.log(color);
// });


// var nameInput = document.querySelector(".header__input--name").value;
