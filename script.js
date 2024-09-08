let currentSlide = 0; // Inisialisasi indeks slide saat ini
const slides = document.querySelectorAll('.slide'); // Pilih semua elemen slide

function showSlide(index) {
    // Sesuaikan indeks jika keluar dari batas
    if (index >= slides.length) {
        currentSlide = 0;  // Kembali ke slide pertama jika sudah mencapai akhir
    } else if (index < 0) {
        currentSlide = slides.length - 1;  // Kembali ke slide terakhir jika bergeser ke kiri dari slide pertama
    } else {
        currentSlide = index; // Set indeks slide saat ini
    }

    // Menggeser slide
    const offset = -currentSlide * 100;  // Menggeser slide secara horizontal
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Terapkan transformasi
}

function nextSlide() {
    showSlide(currentSlide + 1); // Tampilkan slide berikutnya
}

function prevSlide() {
    showSlide(currentSlide - 1); // Tampilkan slide sebelumnya
}

// Auto slide
setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
