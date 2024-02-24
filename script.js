function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    var isValid = true;

    // Validasi username
    if (username.length > 12) {
        usernameError.innerHTML = "Username maksimal 12 karakter.";
        isValid = false;
    } else {
        usernameError.innerHTML = "";
    }

    // Validasi password
    if (password.length > 16) {
        passwordError.innerHTML = "Password maksimal 16 karakter.";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    return isValid;
}