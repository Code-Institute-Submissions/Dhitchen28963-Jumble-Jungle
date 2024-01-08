 // Navigation menu clickable images //
 document.querySelectorAll('.nav-icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
      const targetPage = this.getAttribute('data-target');
      // Perform actions based on the clicked icon or page target
      // For example: show/hide content, load a new section, etc.
      console.log('Clicked icon with target:', targetPage);
    });
  });