document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Effect
    const els = document.querySelectorAll('[data-reveal]');
    
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on');
            }
        });
    }, { threshold: 0.1 });

    els.forEach(el => obs.observe(el));
});