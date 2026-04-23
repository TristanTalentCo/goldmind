        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.custom-navbar');
            const btn = document.querySelector('.btn-open-menu');
            const navbarTabs = document.querySelectorAll('.navbar-tab');
            let isOpen = false;

            // Initial animation to show the menu
            navbar.style.left = '-400px';
            navbar.style.transition = 'left 0.6s ease-in-out';
            
            setTimeout(() => {
                navbar.style.left = '0px';
            }, 300);
            
            setTimeout(() => {
                navbar.style.left = '-400px';
            }, 1200);

            btn.addEventListener('click', function() {
                navbar.style.transition = 'left 0.3s ease-in-out';
                if (isOpen) {
                    navbar.style.left = '-400px';
                    isOpen = false;
                } else {
                    navbar.style.left = '0px';
                    isOpen = true;
                }
            });

            // Close on hover out
            navbar.addEventListener('mouseleave', function() {
                navbar.style.transition = 'left 0.3s ease-in-out';
                navbar.style.left = '-400px';
                isOpen = false;
            });

            // Close 0.5s after clicking a navbar tab
            navbarTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    setTimeout(() => {
                        navbar.style.transition = 'left 0.3s ease-in-out';
                        navbar.style.left = '-400px';
                        isOpen = false;
                    }, 500);
                });
            });
        });