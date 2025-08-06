(function() {
      const tabs = document.querySelectorAll('.navbar-tab');
      const slider = document.querySelector('.navbar-slider');
      tabs.forEach((tab, idx) => {
      tab.addEventListener('click', function() {
        document.querySelector('.navbar-tab.active').classList.remove('active');
        tab.classList.add('active');
        slider.style.left = `calc(${idx} * (100% / 5))`;
      });
      });
    })();