var formEl = document.getElementById("formElement");
var togglePassword = document.querySelector("#togglePassword");
var passwordInput = document.querySelector("#password");
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var emailInput = document.getElementById("email");
    var userEmail = emailInput.value.trim();
    var userPassword = passwordInput.value.trim();
    var validEmail = "venkat@gmail.com";
    var validPassword = "12345";
    if (!userEmail || !userPassword) {
        alert("Please enter the credentials");
        return;
    }
    if (userPassword.length < 4) {
        alert("Please enter valid password");
        return;
    }
    // if (!userEmail.includes('@') || !userEmail.includes('.')) {
    //     alert("Please enter valid email");
    //     return;
    // }
    if (validEmail === userEmail && validPassword === userPassword) {
        alert("Login successful");
        localStorage.setItem('email', userEmail);
        window.location.href = "../src/home.html";
    }
    else {
        alert("Please enter valid credentials");
    }
});
// Toggle Password Visibility
togglePassword.addEventListener("click", function () {
    var type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("fa-eye-slash");
});
