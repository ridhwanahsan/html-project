const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000, // Corrected typo: 'spees' to 'speed'

  // Autoplay configuration
  autoplay: {
    delay: 3000, // Delay between slides (in milliseconds)
    disableOnInteraction: false, // Keeps autoplay running after user interaction
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
