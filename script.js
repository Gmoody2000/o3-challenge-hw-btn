// Generate a random password
function generatePassword() {
  var length = 12,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()><?/{}[]+=-",
    password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("password-input").value = password;
}

// Copy the generated password to the clipboard
function copyPassword() {
  var passwordInput = document.getElementById("password-input");
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

