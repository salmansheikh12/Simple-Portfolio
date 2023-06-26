
window.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('check');
    var menu = document.querySelector('.links');

    toggle.addEventListener('change', function() {
      if (toggle.checked) {
        menu.classList.remove('menu-visible');
       
      } 
      
      else {
        menu.classList.add('menu-visible');
      }

      
    });
  });