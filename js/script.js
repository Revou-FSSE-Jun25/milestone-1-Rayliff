const logonav = document.getElementById('logo-nav');
const menulist = document.getElementById('menu-list');

  logonav.addEventListener('click', () => {
    menulist.classList.toggle("hiddenlist");
  });