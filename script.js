
// SHOW / HIDE PASSWORD
// ==========================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});


// ==========================
// SWITCH TO FORGOT PASSWORD
// ==========================

const loginForm = document.getElementById("loginForm");
const forgotForm = document.getElementById("forgotForm");

const forgotLink = document.getElementById("forgotLink");
const backLogin = document.getElementById("backLogin");

forgotLink.addEventListener("click", function(e){

    e.preventDefault();

    loginForm.style.display = "none";
    forgotForm.style.display = "block";

});

backLogin.addEventListener("click", function(e){

    e.preventDefault();

    forgotForm.style.display = "none";
    loginForm.style.display = "block";

});


// ==========================
// LOGIN VALIDATION
// ==========================

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const passwordValue = document.getElementById("password").value.trim();

    if(username === "" || passwordValue === ""){

        alert("Please enter Username and Password.");

        return;

    }

    alert("Login Successful!\nRedirecting...");

    setTimeout(function(){

        window.location.href = "home.html";

    },1500);

});


// ==========================
// FORGOT PASSWORD
// ==========================

forgotForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if(email === ""){

        alert("Please enter your email address.");

        return;

    }

    alert("Password reset link sent successfully!");

});