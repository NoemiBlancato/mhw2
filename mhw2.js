function togglemenu(e) {
  e.stopPropagation();
  const dropdown = document.querySelector('.menu-dropdown');
  dropdown.classList.toggle('active');
}

function link_dropdown(e) {
  e.preventDefault();
  e.stopPropagation();

  document.querySelectorAll('.link_dropdown.active').forEach(drop => {
    if (drop !== this.nextElementSibling) {
      drop.classList.remove('active');
    }
  });

  const dropdown = this.nextElementSibling;
  if (dropdown && dropdown.classList.contains('link_dropdown')) {
    dropdown.classList.toggle('active');
  }
}

function cambiaimmagini() {
  const currentSrc = this.src;
  const altSrc = this.dataset.altSrc;
  
  if (altSrc) {
    this.src = altSrc;
    this.dataset.altSrc = currentSrc;
  }
}

function chiudi_menu_mobile(e) {
  const menuIcon = document.querySelector('.menu-icon');
  const dropdown = document.querySelector('.menu-dropdown');
  
  if (!dropdown.contains(e.target) && e.target !== menuIcon) {
    dropdown.classList.remove('active');
  }
}

function gestione_funzioni() {
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');
  const dropdown = document.createElement('div');
  dropdown.className = 'menu-dropdown';
  
  const menuItems = [
    'GLI <strong>UFFIZI</strong>',
    'PALAZZO <strong>PITTI</strong>',
    'GIARDINI DI <strong>BOBOLI</strong>',
    'CORRIDOIO <strong>VASARIANO</strong>',
    'Visita',
    'News ed eventi',
    'Collezioni',
    'Educazione',
    'Sostienici',
    'Biglietti'
  ];
  
  menuItems.forEach(item => {
    const link = document.createElement('a');
    link.innerHTML = item;
    link.href = '#';
    dropdown.appendChild(link);
  });
  
  nav.appendChild(dropdown);
  
  menuIcon.addEventListener('click', togglemenu);
  document.addEventListener('click', chiudi_menu_mobile);

  const links = document.querySelectorAll('.Link_info_inizio a');
  links.forEach(link => {
    link.addEventListener('click', link_dropdown);
  });

  document.querySelectorAll('.collezione-img').forEach(img => {
    img.addEventListener('click', cambiaimmagini);
  });
}

document.addEventListener('DOMContentLoaded', gestione_funzioni); 