
function showTooltip(id) {
  const tooltip = document.getElementById(id);
  tooltip.style.display = 'flex';
  tooltip.classList.add('flex');
  document.body.classList.add('no-scroll');
}

function closeTooltip(id) {
  const tooltip = document.getElementById(id);
  tooltip.style.display = 'none';
  tooltip.classList.remove('flex');
  document.body.classList.remove('no-scroll');
}

document.querySelectorAll('.btn-modal').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const tooltipId = this.getAttribute('data-tooltip-id');
    showTooltip(tooltipId);
  });
});

document.querySelectorAll('.btn-close').forEach(button => {
  button.addEventListener('click', function() {
    const tooltipId = this.getAttribute('data-tooltip-id');
    closeTooltip(tooltipId);
  });
});
