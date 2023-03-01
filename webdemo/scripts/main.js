let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.jpg') {
        myImage.setAttribute('src', "images/2.png");
    } else {
        myImage.setAttribute('src', "images/1.jpg");
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
}
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}
