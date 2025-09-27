// Weblytix projesi için JavaScript alanı
// Buraya Slayder (Slider) ve diğer interaktif kodlar gelecek.
console.log("Weblytix script.js dosyası başarıyla bağlandı.");
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    // Eğer iletişim formu sayfada varsa (sadece iletisim.html'de çalışır)
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            // Tüm gerekli alanları seçiyoruz
            const name = document.getElementById('ad');
            const email = document.getElementById('email');
            const subject = document.getElementById('konu');
            const message = document.getElementById('mesaj');
            
            // Hata sayacını sıfırlıyoruz
            let hasError = false;

            // 1. İsim Alanı Kontrolü
            if (name.value.trim() === '') {
                alert('Lütfen Adınızı ve Soyadınızı girin.');
                name.focus();
                hasError = true;
            } 
            
            // 2. E-posta Alanı Kontrolü
            else if (email.value.trim() === '' || !validateEmail(email.value)) {
                alert('Lütfen geçerli bir E-posta adresi girin.');
                email.focus();
                hasError = true;
            } 
            
            // 3. Konu Alanı Kontrolü
            else if (subject.value.trim() === '') {
                alert('Lütfen Konu Başlığını girin.');
                subject.focus();
                hasError = true;
            } 
            
            // 4. Mesaj Alanı Kontrolü
            else if (message.value.trim() === '') {
                alert('Lütfen mesajınızı yazın.');
                message.focus();
                hasError = true;
            }

            // Hata varsa gönderimi durdur
            if (hasError) {
                event.preventDefault();
            } else {
                // Başarılıysa kullanıcıya bilgi ver ve formu gönder
                alert('Mesajınız başarıyla gönderiliyor. Teşekkür ederiz!');
                // Form, yukarıdaki action="https://formspree.io/f/..." adresine gönderilir
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu-button');
    const navMenu = document.querySelector('header nav');

    // Hamburger butonuna tıklandığında
    hamburger.addEventListener('click', () => {
        // nav elemanına 'menu-acik' sınıfını ekle/çıkar
        navMenu.classList.toggle('menu-acik');
    });

    // Menüdeki bir linke tıklandığında menüyü otomatik kapat
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('menu-acik');
        });
    });
});

// Basit E-posta doğrulama fonksiyonu
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());

}
