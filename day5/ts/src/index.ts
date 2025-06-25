const formEl = document.getElementById("formElement") as HTMLFormElement;
const togglePassword = document.querySelector("#togglePassword") as HTMLElement;
const passwordInput = document.querySelector("#password") as HTMLInputElement;

formEl.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const emailInput = document.getElementById("email") as HTMLInputElement;
    const userEmail = emailInput.value.trim();
    const userPassword = passwordInput.value.trim();

    const validEmail = "venkat@gmail.com";
    const validPassword = "12345";

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
    } else {
        alert("Please enter valid credentials");
    }
});

// Toggle Password Visibility
togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("fa-eye-slash");
});

