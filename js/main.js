// Portfolio — Gwendal Riquier : navigation et petits détails d'interface.

document.addEventListener('DOMContentLoaded', () => {
  // Année du pied de page
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Filet sous la barre de navigation dès qu'on défile
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Menu mobile
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };
    burger.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  // Lien actif selon la section visible (page d'accueil)
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = links
    .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);
  if (sections.length) {
    const spy = () => {
      const y = window.scrollY + 140;
      let current = '';
      sections.forEach((s) => { if (s.offsetTop <= y) current = s.id; });
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
    };
    spy();
    window.addEventListener('scroll', spy, { passive: true });
  }
});
