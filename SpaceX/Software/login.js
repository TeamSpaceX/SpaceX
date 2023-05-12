let repoName = '';
$(document).ready(function() {
    const pathNameArr = window.location.pathname.split('/');
    if (pathNameArr[1] && !pathNameArr[1].includes('.html')) {
        repoName = '/' + pathNameArr[1];
    }

    const username = localStorage.getItem("username");
    if (username) {
        window.location.href = window.location.origin + repoName + "/index.html";
    }
});

const loginFormElement = $("#login-form");
if (loginFormElement) {
  loginFormElement.on("submit", (event) => {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get the values of the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorElement = $(".invalid-login");
    if (username !== "SpaceX" || password !== "Spacex@123") {
      errorElement.css("visibility", "visible");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("first_login", "true");
    errorElement.css("visibility", "hidden");
    
    window.location.href = window.location.origin + repoName + "/index.html";
  });
}

// Get the current year
const currentYear = new Date().getFullYear();
  
// Update the current year in the footer
const currentYearElement = $("#currentYear");
if (currentYearElement) {
  currentYearElement.text(currentYear.toString());
}
