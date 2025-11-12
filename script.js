
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.section-title, .story-text, .story-image, .timeline-item, .detail-card, .faq-item').forEach(el => {
            observer.observe(el);
        });

        // Gallery Carousel
        // Gallery Carousel
        let currentIndex = 0;
        const cards = document.querySelectorAll('.carousel-card');
        const totalCards = cards.length;

        function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('center', 'left', 'right', 'hidden');
        });

        // Calculate positions based on the desired order:
        const centerIndex = currentIndex;
        const rightIndex = (currentIndex + 1) % totalCards;
        const hidden1Index = (currentIndex + 2) % totalCards;
        const hidden2Index = (currentIndex + 3) % totalCards;
        const hidden3Index = (currentIndex + 4) % totalCards;
        const leftIndex = (currentIndex + 5) % totalCards; // last before looping

        // Assign classes
        cards[centerIndex].classList.add('center');
        cards[rightIndex].classList.add('right');
        cards[leftIndex].classList.add('left');

        // Everything else stays hidden
        [hidden1Index, hidden2Index, hidden3Index].forEach(i => {
            cards[i].classList.add('hidden');
        });
        }

        // Initialize
        updateCarousel();

        // Buttons
        document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
        });


        // FAQ Toggle
        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const toggle = element.querySelector('.faq-toggle');
            
            answer.classList.toggle('active');
            toggle.textContent = answer.classList.contains('active') ? '−' : '+';
        }

        // Countdown Timer
        const weddingDate = new Date('June 15, 2026 16:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(3, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

            if (distance < 0) {
                document.getElementById('countdown').innerHTML = '<h2 style="font-size: 3rem;">We\'re Married! 🎉</h2>';
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // RSVP Form Submission
        function submitRSVP() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const guests = document.getElementById('guests').value;
            const attendance = document.getElementById('attendance').value;
            const dietary = document.getElementById('dietary').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !guests || !attendance) {
                alert('Please fill in all required fields (marked with *)');
                return;
            }

            // Here you would normally send this data to a server
            // For now, we'll just show a confirmation
            alert(`Thank you ${name}! Your RSVP has been received. We'll send a confirmation to ${email}.`);
            
            // Clear form
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('guests').value = '';
            document.getElementById('attendance').value = '';
            document.getElementById('dietary').value = '';
            document.getElementById('message').value = '';
        }

        // Smooth scroll enhancement
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        let lastScroll = 0;
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.padding = '0.8rem 5%';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '1.5rem 5%';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
            }
        });
        
window.addEventListener("scroll", function() {
    const header = document.getElementById("main-header");
    if (window.scrollY > 100) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});
