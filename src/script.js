function darkMode() {
  var element = document.body;
  element.classList.toggle("darkMode");
  document.getElementById("lightModeButton").style.display = "none";
  document.getElementById("darkModeButton").style.display = "block";
}
function lightMode() {
  var element = document.body;
  element.classList.toggle("darkMode");
  document.getElementById("lightModeButton").style.display = "block";
  document.getElementById("darkModeButton").style.display = "none";
}
function openNav(){
  var hiddenNav = document.getElementById("hiddenNav");
  hiddenNav.style.display = "block";
  hiddenNav.style.opacity = "0";
  var fade = setInterval(function () {
      if (hiddenNav.style.opacity < "1") {
          hiddenNav.style.opacity = parseFloat(hiddenNav.style.opacity) + 0.1;
      } else {
          clearInterval(fade);
      }
  }, 1);
  document.getElementById("navButton").style.display = "none";
}

function closeNav() {
  var hiddenNav = document.getElementById("hiddenNav");
  hiddenNav.style.opacity = "1";
  var fade = setInterval(function () {
      if (hiddenNav.style.opacity > "0") {
          hiddenNav.style.opacity = parseFloat(hiddenNav.style.opacity) - 0.1;
      } else {
          clearInterval(fade);
      }
  }, 1);
  document.getElementById("navButton").style.display = "block";
}

function displayPopup()
{
   alert("Form submitted!");
}
