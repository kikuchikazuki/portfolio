document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {
        // Initial check
        toggleScrollTopBtn();

        // Scroll event listener
        window.addEventListener('scroll', toggleScrollTopBtn);

        // Click event listener
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function toggleScrollTopBtn() {
        if (window.scrollY > 100) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
});
