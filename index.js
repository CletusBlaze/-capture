(function () {
  'use strict';
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const formData = new FormData(form);

    fetch('https://formspree.io/f/mqkrjdgn', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        modal.show();
        form.reset();
        form.classList.remove('was-validated');
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    })
    .catch(() => alert('Oops! There was a problem submitting your form.'));
  }, false);
})();
