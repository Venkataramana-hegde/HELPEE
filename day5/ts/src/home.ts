// const profile: string = localStorage.getItem("email");

// if (!profile) {
//     window.location.href = "../index.html";
// } 

// document.getElementById("profile").innerText = profile.slice(0, 6);

// document.querySelector(".input-button").addEventListener("click", () => {
//     const inputElement = document.getElementById("subscribe");
//     const inputValue = inputElement.value;
//     alert("Your subscription for " + inputValue + " has been added");
// })

// const profile = localStorage.getItem("email") ;

if (!localStorage.getItem("email")) {
    window.location.href = "../index.html";
} else {
    const profileEl = document.getElementById("profile");
    if (profileEl) {
        profileEl.innerText = localStorage.getItem("email")!.slice(0, 6);
    }
}

// const subscribeButton = document.querySelector(".input-button");
if (document.querySelector(".input-button")) {
    document.querySelector(".input-button")!.addEventListener("click", () => {
        const inputElement = document.getElementById("subscribe") as HTMLInputElement;
        if (inputElement) {
            const inputValue = inputElement.value;
            alert("Your subscription for " + inputValue + " has been added");
        }
    });
}

// console.log("Hello")