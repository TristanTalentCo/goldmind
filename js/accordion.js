document.querySelectorAll('.acc-category-title').forEach(title => {
    title.addEventListener('click', () => {
      const options = title.nextElementSibling;
      const isActive = title.classList.contains('active');
  
      // Close all other categories
      document.querySelectorAll('.acc-category-title').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.acc-category-options').forEach(o => o.style.display = 'none');
  
      // Toggle the clicked category
      if (!isActive) {
        title.classList.add('active');
        options.style.display = 'flex';
      }
    });
  });
  
  document.querySelectorAll(' .option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('active'));
      option.classList.add('active');
    });
  });
  
  