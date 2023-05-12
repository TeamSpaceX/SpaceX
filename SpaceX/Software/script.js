let repoName = '';
$(document).ready(function() {
  const pathNameArr = window.location.pathname.split('/');
  if (pathNameArr[1] && !pathNameArr[1].includes('.html')) {
    repoName = '/' + pathNameArr[1];
  }

  const username = localStorage.getItem("username");
  if (!username) {
      window.location.href = window.location.origin + repoName + "/login.html";
  }
});

const logoElement = $("#logo");
if (logoElement) {
  logoElement.on("click", () => {
    window.location.href = window.location.origin + repoName + "/index.html";
  })
}

const systemElement = $(".system");
if (systemElement) {
  systemElement.on("click", (currentElement) => {
      const system = currentElement.target.dataset.systemName;
      window.location.href = window.location.origin + repoName + "/system.html?system=" + system;
  })
}


const logoutElemet = $("#logout");
if (logoutElemet) {
  logoutElemet.on("click", () => {
    localStorage.clear();
    window.location.href = window.location.origin + repoName + "/login.html";
  })
}

// Get the current year
const currentYear = new Date().getFullYear();
  
// Update the current year in the footer
const currentYearElement = $("#currentYear");
if (currentYearElement) {
  currentYearElement.text(currentYear.toString());
}
