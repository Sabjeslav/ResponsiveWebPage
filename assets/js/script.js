window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.header-nav'),
  navbarItem = document.querySelectorAll('.header-nav-elem'),
  hamburger = document.querySelector('.header-burger'),

  toggleBurger = () => {
    hamburger.classList.toggle('header-burger-active');
    navbar.classList.toggle('header-nav-active');
  };

  hamburger.addEventListener('click', () => {
      toggleBurger();
  });

  navbarItem.forEach(item => {
      item.addEventListener('click', () => {
        toggleBurger();
      })
  })
})