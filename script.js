// Show / Hide Password
function showPassword() {
    const password = document.getElementById("password");
    const eye = document.getElementById("eye");

    if (password.type === "password") {
        password.type = "text";
        eye.innerHTML = "🙈";
    } else {
        password.type = "password";
        eye.innerHTML = "👁";
    }
}

// Google Login Success
function handleCredentialResponse(response) {
    console.log("Google Login Success");
    console.log(response.credential);

    alert("Welcome to DRACK VERSE!");

    // Login hone ke baad Home Page par bhejna
    window.location.href = "index.html";
}

// Login Button
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {
            alert("Please enter Email and Password");
            return;
        }

        alert("Login Successful!");

        // Home Page Open
        window.location.href = "index.html";
    });
});
