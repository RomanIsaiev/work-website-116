window.addEventListener('scroll', function () {
  const button = document.querySelector('.scroll-container');
  const scrollPosition = window.scrollY;

  const threshold = 20;

  if (scrollPosition > threshold) {
    button.classList.add('js-show');
  } else {
    button.classList.remove('js-show');
  }
});
