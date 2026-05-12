
            document.addEventListener('DOMContentLoaded', function() {
              const tabMap = [
                
                'tab-skillanalytics'
              ];

              const dbTabs = document.querySelectorAll('.db-tab-back');
              
              dbTabs.forEach((tab, index) => {
                tab.addEventListener('click', function(e) {
                  e.preventDefault();
                  
                  const currentTab = document.getElementById('tab-socioemocional-detalle');
                  const targetId = tabMap[index];
                  const targetTab = document.getElementById(targetId);
                  
                  if (!targetTab) return;
                  
                  // Fade out current
                  currentTab.style.transition = 'opacity 0.5s ease';
                  currentTab.style.opacity = '0';
                  
                  setTimeout(() => {
                    currentTab.style.display = 'none';
                    targetTab.style.display = 'block';
                    targetTab.style.opacity = '0';
                    targetTab.style.transition = 'opacity 0.35s ease';
                    
                    // Trigger reflow
                    void targetTab.offsetWidth;
                    
                    // Fade in target
                    targetTab.style.opacity = '1';
                  }, 500);
                });
              });
            });
