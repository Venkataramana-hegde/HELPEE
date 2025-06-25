// let count = 0;
// document.getElementById("decreaseBtn").onclick = function(){
//     count -=1;
//      document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("resetBtn").onclick = function(){
//     count =0;
//      document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("increaseBtn").onclick = function(){
//     count +=1;
//      document.getElementById("countLabel").innerHTML = count;
// }

// let count = 0;

// document.querySelector("#increaseBtn").onclick = function() {
//     count += 1;
//     document.querySelector('#number').innerHTML = count;
// }
// document.querySelector("#decreaseBtn").onclick = function() {
//     count--;
//     document.querySelector('#number').innerHTML = count;
// }
// document.querySelector("#resetBtn").onclick = function() {
//     count = 0;
//     document.querySelector('#number').innerHTML = count;
// }

// function getJoke() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Why don’t scientists trust atoms? Because they make up everything.");
//     }, 2000); // wait 2 sec
//   });
// }

// document.getElementById("jokeBtn").addEventListener("click", async () => {
//   const display = document.getElementById("jokeDisplay");
//   display.textContent = "Loading joke... 😂";

//   const joke = await getJoke();
//   display.textContent = joke;
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.getElementById("dogBtn");
//   const img = document.getElementById("dogImage");

//   btn.addEventListener("click", async () => {
//     try {
//       const res = await fetch("https://dog.ceo/api/breeds/image/random");
//       const data = await res.json();
//       img.src = data.message;
//     } catch (err) {
//       alert("Could not fetch a doggo. Woof.");
//     }
//   });
// });

// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";




// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = `Mozilla is cool, ${myName}`;
// }

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }

// myButton.addEventListener("click", () => {
//   setUserName();
// });




// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var:", i), 1000);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log("let:", j), 1000);
// }

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Dummy credentials
  const validUser = "venkat";
  const validPass = "1234";

  if (!username || !password) {
    message.textContent = "Please enter both username and password.";
    return;
  }

  if (username === validUser && password === validPass) {
    message.textContent = "✅ Login successful!";
  } else {
    message.textContent = "❌ Invalid username or password.";
  }
});
