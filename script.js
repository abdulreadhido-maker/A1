// =========================
// Torrema JavaScript
// =========================

console.log("مرحبًا بك في Torrema 🚀");

// زر ابدأ التعلم
const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {
    heroBtn.addEventListener("click", () => {
        console.log("بدء رحلة التعلم...");
    });
}

// تأثير بطاقات الخدمات
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// تغيير الهيدر عند التمرير
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "#111";
        header.style.boxShadow = "none";

    }

});

// ظهور العناصر أثناء التمرير
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".service-card").forEach(card => {

    observer.observe(card);

});
