const slider = document.querySelector('.carousel');
const mediaQueryList = window.matchMedia('(max-width: 2000px)');
const touch_c = document.querySelector('.valeur_c');
const touch_s = document.querySelector('.valeur_s');
const touch_r = document.querySelector('.valeur_r');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    if (mediaQueryList.matches) {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }
});

touch_c.addEventListener('mousedown', () => {
    if (mediaQueryList.matches) {
        touch_c.classList.toggle('show');
    }
});

touch_s.addEventListener('mousedown', () => {
    if (mediaQueryList.matches) {
        touch_s.classList.toggle('show');
    }
});

touch_r.addEventListener('mousedown', () => {
    if (mediaQueryList.matches) {
        touch_r.classList.toggle('show');
    }
});

slider.addEventListener('mouseleave', _ => {
    if (mediaQueryList.matches) {
        isDown = false;
        slider.classList.remove('active');
    }
});

slider.addEventListener('mouseup', _ => {
    if (mediaQueryList.matches) {
        isDown = false;
        slider.classList.remove('active');
    }
});

slider.addEventListener('mousemove', e => {
    if (mediaQueryList.matches) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const SCROLL_SPEED = 3;
        const walk = (x - startX) * SCROLL_SPEED;
        slider.scrollLeft = scrollLeft - walk;
    }
});