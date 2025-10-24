const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  thumbs.forEach(thumb => thumb.classList.remove('active'));
  slides[i].classList.add('active');
  thumbs[i].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});