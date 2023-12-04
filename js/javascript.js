function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

function transition(image) {
  document.getElementById('scene-1').style.display = "none";
  document.getElementById('scene-2').style.display = "block";
}

function revert(image) {
  document.getElementById('scene-2').style.display = "none";
  document.getElementById('scene-1').style.display = "block";
}