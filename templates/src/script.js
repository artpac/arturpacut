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
    }, 16);
    document.getElementById("navButton").style.display = "none";
}

// function closeNav() {
//     var hiddenNav = document.getElementById("hiddenNav");
//     hiddenNav.style.display = "none";
//     hiddenNav.style.opacity = "1";
//     setInterval = 16;
//     var fade = setInterval(function () {
//         if (hiddenNav.style.opacity > "0") {
//             hiddenNav.style.opacity = parseFloat(hiddenNav.style.opacity) - 0.1;
//         } else {
//             clearInterval(fade);
//         }
//     }, 16);
//     document.getElementById("navButton").style.display = "block";
// }
function closeNav() {
    document.getElementById("hiddenNav").style.display = "none";
    document.getElementById("navButton").style.display = "block";
}


function mouseHover() {
    var element = document.body;
    document.styleSheets = "radial-gradient(circle at center, red 0, blue, green 100%)"
}