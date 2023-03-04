//const myHeading = document.querySelector("h1");
//myHeading.textContent = "hello world";

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
let i = multiply(16, 32);
console.log(i);


//alert(multiply(32, 32));

//document.querySelector("html").addEventListener("click", function () {
//    alert("ai pai para");
//});

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/oceano.jpg") {
    myImage.setAttribute("src", "images/oceanoF.jpg");
  } else {
    myImage.setAttribute("src", "images/oceano.jpg");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla é legal, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};