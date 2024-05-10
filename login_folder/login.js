 // Initialize empty arrays to store registered email addresses and passwords
var emailArray = [];
var passwordArray = [];

// Get references to HTML elements
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

// Function to switch to the registration tab
function regTabFun() {
    event.preventDefault();
    regBox.style.visibility = "visible";
    loginBox.style.visibility = "hidden";
    forgetBox.style.visibility = "hidden";
}

// Function to switch to the login tab
function loginTabFun() {
    event.preventDefault();
    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";
    forgetBox.style.visibility = "hidden";
}

// Function to switch to the forgot password tab
function forTabFun() {
    event.preventDefault();
    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "hidden";
    forgetBox.style.visibility = "visible";
}

// Function to handle user registration
function register() {
    event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    // Validate input fields
    if (email == "") {
        alert("Email required.");
        return;
    } else if (password == "") {
        alert("Password required.");
        return;
    } else if (passwordRetype == "") {
        alert("Password required.");
        return;
    } else if (password != passwordRetype) {
        alert("Passwords don't match. Please retype your password.");
        return;
    } else if (emailArray.indexOf(email) == -1) {
        // Register the user if email is not already in the array
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + " Registration successful.");
        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
    } else {
        alert(email + " email is already registered.");
        return;
    }
}

// Function to handle user login
function login() {
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    } else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        return;
    } else {
        alert(email + " Login successful");
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        return;
    }
}

// Function to handle forgot password
function forgot() {
    event.preventDefault();
    var email = document.getElementById("fe").value;

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    }

    alert("Check your emails for a new verification code. Thanks"); // Placeholder, user will not get an actual code
    document.getElementById("fe").value = "";
}

