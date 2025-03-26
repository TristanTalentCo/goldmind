document.querySelectorAll('[tip-id]').forEach(element => {
    const tooltip = document.getElementById('tooltip');
    const tooltipText = document.getElementById('tooltipText');

    element.addEventListener('mousemove', (event) => {
      const tipId = element.getAttribute('tip-id');
      tooltipText.textContent = tipId; // Use tip-id as the tooltip text
      tooltip.style.display = 'block';
      tooltip.style.left = event.pageX + 25 + 'px';
      tooltip.style.top = event.pageY + 'px';
    });

    element.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
    });