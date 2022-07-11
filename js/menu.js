(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  // mine code, work?
  // const mobileMenuBlockRef = document.querySelector('[data-menu-mobile]');
  const logoHideRef = document.querySelector('[data-logo-hide]');
  // const desktopMenuRef = document.querySelector('[data-menu-desktop]');
  // mine code, work?

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('header__button--is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('menu-container--is-open');
    // mine code, work?
    // mobileMenuBlockRef.classList.toggle('mobile-menu--is-open');
    logoHideRef.classList.toggle('logo--is-hide');
    // desktopMenuRef.classList.toggle('tablet-desktop-menu--is-open');
    // mine code, work?
  });
})();
