document.addEventListener('DOMContentLoaded', function () {

  // Hamburger Menü İşlevselliği
  const hamburger = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mainNav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Menüde bir linke tıklanınca kapanması
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // Formspree Form Gönderimi
  const contactForm = document.querySelector('form[action^="https://formspree.io"]');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Sayfa yenilenmesini engelle

      // Form verilerini al
      const formData = new FormData(contactForm);

      // Formspree'e gönder
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Teşekkür mesajını göster
          thankYouMessage.style.display = 'block';
          contactForm.reset();
          
          // Google Analytics olayı
          if (typeof gtag === 'function') {
            gtag('event', 'form_submit', {
              event_category: 'Contact',
              event_label: 'İletişim Formu Gönderildi'
            });
          }
        } else {
          alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
      })
      .catch(() => {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      });
    });
  }

  // Mailto linklerine tıklama efekti
  const mailtoLinks = document.querySelectorAll('a[href^="mailto"]');
  mailtoLinks.forEach(link => {
    link.addEventListener('click', function () {
      const originalText = this.textContent;
      this.textContent = 'E-posta açılıyor...';
      setTimeout(() => {
        this.textContent = originalText;
      }, 1500);
    });
  });

  // Kart hover efekti (hizmetler sayfası)
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 200 * index);
  });

});
