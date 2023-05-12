let firstLogin = localStorage.getItem("first_login") === "true";
if (firstLogin) {
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            let welcomeElement = $("#welcome");
            welcomeElement.addClass("fade-out");
        }, 5000); // 3 seconds

        setTimeout(function() {
            let welcomeElement = $("#welcome-2");
            welcomeElement.addClass("fade-out");
        }, 10000); // 6 seconds
        localStorage.setItem("first_login", "false");
    });
} else {
    let welcomeElement = $("#welcome");
    if (welcomeElement) {
        welcomeElement.css("display", "none");
    }
    welcomeElement = $("#welcome-2");
    if (welcomeElement) {
        welcomeElement.css("display", "none");
    }
}