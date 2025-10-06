document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mainNav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  const forms = document.querySelectorAll('form[action^="https://formspree.io"]');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (typeof gtag === 'function') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'İletişim Formu'
        });
      }
    });
  });
});
