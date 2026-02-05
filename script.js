document.addEventListener('DOMContentLoaded', function () {
    // --- Scroll Top Button Logic (Existing) ---
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {
        toggleScrollTopBtn();
        window.addEventListener('scroll', toggleScrollTopBtn);
        scrollTopBtn.addEventListener('click', function () {
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

    // --- Modal Logic (New) ---
    // const workCards = document.querySelectorAll('.work-card');
    // const modalOverlay = document.getElementById('modalOverlay');
    // const workModal = document.getElementById('workModal');
    // const modalClose = document.getElementById('modalClose');

    // const modalImage = document.getElementById('modalImage');
    // const modalTitle = document.getElementById('modalTitle');
    // const modalMeta = document.getElementById('modalMeta');
    // const modalDesc = document.querySelector('#modalDesc p'); // Assuming p inside

    // if (workCards.length > 0 && workModal) {
    //     workCards.forEach(card => {
    //         card.addEventListener('click', function () {
    //             // 1. Get data from the card
    //             const imgElement = this.querySelector('.work-preview img');
    //             const titleElement = this.querySelector('.work-title');
    //             const langElement = this.querySelector('.work-lang');

    //             // Get additional description if hidden element exists, or valid default
    //             // const descElement = this.querySelector('.work-desc-hidden'); 

    //             const imgSrc = imgElement ? imgElement.src : '';
    //             const titleText = titleElement ? titleElement.textContent : 'No Title';
    //             const langText = langElement ? langElement.textContent : '';

    //             // 2. Populate Modal
    //             // We might want to use a higher res image if available, 
    //             // but for now use the same src
    //             modalImage.src = imgSrc;
    //             modalTitle.textContent = titleText;
    //             modalMeta.textContent = langText;

    //             // Placeholder description or dynamic if we add it later
    //             modalDesc.textContent = `これは「${titleText}」の詳細です。`;

    //             // 3. Show Modal
    //             modalOverlay.classList.add('active');
    //             workModal.classList.add('active');
    //             document.body.style.overflow = 'hidden'; // Prevent background scrolling
    //         });
    //     });

    //     // Close Modal Functions
    //     function closeModal() {
    //         modalOverlay.classList.remove('active');
    //         workModal.classList.remove('active');
    //         document.body.style.overflow = ''; // Restore scrolling
    //     }

    //     modalClose.addEventListener('click', closeModal);
    //     modalOverlay.addEventListener('click', closeModal);

    //     // Close on Escape key
    //     document.addEventListener('keydown', function (event) {
    //         if (event.key === 'Escape' && workModal.classList.contains('active')) {
    //             closeModal();
    //         }
    //     });
    // }
});
