const slider = document.querySelector('.carousel');
const touch_c = document.querySelector('.valeur_c');
const touch_s = document.querySelector('.valeur_s');
const touch_r = document.querySelector('.valeur_r');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

touch_c.addEventListener('mousedown', () => {
    touch_c.classList.toggle('show');
});

touch_s.addEventListener('mousedown', () => {
    touch_s.classList.toggle('show');
});

touch_r.addEventListener('mousedown', () => {
    touch_r.classList.toggle('show');
});

slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});