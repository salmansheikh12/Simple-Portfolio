// window.addEventListener('DOMContentLoaded', function() {
//   var toggle = document.getElementById('check');
//   var menu = document.querySelector('.links');
//   var links = menu.querySelectorAll('a'); // Get all the links inside the menu

//   toggle.addEventListener('change', function() {
//     if (toggle.checked) {
//       menu.classList.add('menu-visible');
//     } else {
//       menu.classList.remove('menu-visible');
//     }
//   });

//   // Add click event listeners to all the links
//   links.forEach(function(link) {
//     link.addEventListener('click', function() {
//       menu.classList.remove('menu-visible'); 
//     });
//   });
// });


window.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('check');
  var menu = document.querySelector('.links');
  var links = menu.querySelectorAll('a'); // Get all the links inside the menu

  toggle.addEventListener('change', function() {
    if (toggle.checked) {
      menu.classList.add('menu-visible');
    } else {
      menu.classList.remove('menu-visible');
    }
  });

  // Add click event listeners to all the links
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('menu-visible');
      toggle.checked = false; // Uncheck the toggler
    });
  });
});




