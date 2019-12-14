var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/doggo-sticker.png') {
      myImage.setAttribute ('src','images/doggo-sticker-2.png');
    } else {
      myImage.setAttribute ('src','images/doggo-sticker.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('КТО ТУТ?');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Я СДЕЛЯЛЬ, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Я СДЕЛЯЛЬ, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}