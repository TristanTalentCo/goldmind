// Used in: index.html
document.querySelector('.user-container').addEventListener('click', function() {
  document.getElementById('userActionsMenu').classList.toggle('open');
});

document.addEventListener('click', function(event) {
  var isClickInside = document.querySelector('.user-container').contains(event.target);
  var userActionsMenu = document.getElementById('userActionsMenu');
  if (!isClickInside && userActionsMenu.classList.contains('open')) {
    userActionsMenu.classList.remove('open');
  }
});
