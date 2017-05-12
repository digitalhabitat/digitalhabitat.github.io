var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/ac-source.png') {
    myImage.setAttribute ('src','images/ricky-dog.png');
  } else {
    myImage.setAttribute ('src','images/ac-source.png');
  }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName + ', Welcome to my Webpage';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' +storedName + ', Welcome to my Webpage';
}

myButton.onclick = function() {
  setUserName();
}
