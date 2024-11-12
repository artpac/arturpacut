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


const mouse = document.querySelector('.mouseHover');
mouse.addEventListener('mousemove', e => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  mouse.style.setProperty('--x', x + 'px');
  mouse.style.setProperty('--y', y + 'px');
});