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
function openNav() {
    document.getElementById("hiddenNav").style.display = "block";
    document.getElementById("navButton").style.display = "none";
}
function closeNav() {
    document.getElementById("hiddenNav").style.display = "none";
    document.getElementById("navButton").style.display = "block";
}


function mouseHover() {
    var element = document.body;
    document.styleSheets = "radial-gradient(circle at center, red 0, blue, green 100%)"
}