// Weblytix - Basit ve Hafif JavaScript
document.addEventListener('DOMContentLoaded', function () {

  // 1. Mobil Menü Düğmesi (Opsiyonel – şimdilik gerekmiyor ama geleceğe hazır)
  // Eğer menü çok karmaşıksa, ileride hamburger menü ekleyebiliriz.

  // 2. "Mesaj Gönder" butonuna tıklama efekti
  const mailtoLinks = document.querySelectorAll('a[href^="mailto"]');
  mailtoLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Kullanıcıya küçük bir geri bildirim
      const originalText = this.textContent;
      this.textContent = 'E-posta açılıyor...';
      setTimeout(() => {
        this.textContent = originalText;
      }, 1500);
    });
  });

  // 3. Sayfa yüklendiğinde küçük bir animasyon (isteğe bağlı)
  const cards = document.querySelectorAll('.card, .service-item');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 * index);
  });

  // 4. Google Analytics için ekstra olay takibi (isteğe bağlı)
  // Örneğin: "Hizmet Al" butonuna tıklama
  const ctaButtons = document.querySelectorAll('.btn');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'click', {
          event_category: 'CTA',
          event_label: this.textContent.trim()
        });
      }
    });
  });

});
