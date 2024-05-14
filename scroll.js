document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.container-banner-flash a');
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute('href'); 
        var targetElement = document.querySelector(targetId); 
        if (targetElement) { targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  