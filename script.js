 // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            this.reset();
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.struggle-card, .discover-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });


        // for slider functionality

        
//   const slidesWrapper = document.querySelector('.slides-wrapper');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.nav-arrow.prev');
// const nextBtn = document.querySelector('.nav-arrow.next');
// let currentIndex = 0;
// const totalSlides = slides.length;

// function updateSlidePosition() {
//   slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
//   updateSlidePosition();
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
//   updateSlidePosition();
// });
