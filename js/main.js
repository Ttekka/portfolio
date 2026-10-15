// =========================================================
// Portfolio — Gwendal Riquier — interactions
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Navbar background on scroll ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 10) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mobile menu ---- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      burger.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ---- Active nav link on scroll (home page only) ---- */
  const navLinks = document.querySelectorAll('.nav-links a.nav-link, .nav-links a[href^="#"]');
  const sections = Array.from(document.querySelectorAll('main section[id], header[id]'))
    .filter(s => s.id);
  if (sections.length && navLinks.length) {
    const spy = () => {
      let current = sections[0].id;
      const y = window.scrollY + 120;
      sections.forEach(sec => { if (sec.offsetTop <= y) current = sec.id; });
      navLinks.forEach(a => {
        const href = a.getAttribute('href') || '';
        a.classList.toggle('active', href.endsWith('#' + current));
      });
    };
    spy();
    window.addEventListener('scroll', spy, { passive: true });
  }

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (revealEls.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
      revealEls.forEach(el => io.observe(el));

      // Filet de sécurité : si un élément n'a jamais déclenché l'observer
      // (fenêtre déjà scrollée, redimensionnement, cas limites), on révèle
      // tout après un court délai pour ne jamais laisser du contenu invisible.
      window.addEventListener('load', () => {
        setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 1800);
      });
    }
  }

  /* ---- Project card cursor glow ---- */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  /* ---- Hero terminal typing effect ---- */
  const term = document.getElementById('termBody');
  if (term) {
    const script = [
      { type: 'cmd', text: 'java -version' },
      { type: 'out', text: 'openjdk version "25" 2026-XX-XX' },
      { type: 'cmd', text: './start.sh' },
      { type: 'out', text: 'Starting minecraft server version 1.26.2 (Paper)' },
      { type: 'out', text: 'Preparing level "world"' },
      { type: 'ok',  text: 'Done (14.327s)! For help, type "help"' },
      { type: 'cmd', text: 'whitelist add Ttekka' },
      { type: 'out', text: 'Added Ttekka to the whitelist' },
      { type: 'cmd', text: 'systemctl status minecraft' },
      { type: 'ok',  text: '● minecraft.service — active (running)' },
      { type: 'cmd', text: 'playit' },
      { type: 'out', text: 'tunnel ready → xxxx.joinmc.link' },
    ];

    let line = 0, char = 0, el = null;
    const speed = 26;

    function nextLine () {
      if (line >= script.length) {
        // loop after a pause, clearing the screen
        setTimeout(() => { term.innerHTML = ''; line = 0; nextLine(); }, 3500);
        return;
      }
      const item = script[line];
      el = document.createElement('div');
      el.className = 'line';
      term.appendChild(el);

      if (item.type === 'cmd') {
        char = 0;
        typeCmd(item.text);
      } else {
        el.innerHTML = `<span class="${item.type === 'ok' ? 'ok' : 'out'}">${item.text}</span>`;
        line++;
        setTimeout(nextLine, 260);
      }
    }

    function typeCmd (text) {
      if (char === 0) el.innerHTML = `<span class="prompt">$</span> <span class="caret"></span>`;
      if (char <= text.length) {
        el.innerHTML = `<span class="prompt">$</span> ${text.slice(0, char)}<span class="caret"></span>`;
        char++;
        setTimeout(() => typeCmd(text), speed);
      } else {
        el.innerHTML = `<span class="prompt">$</span> ${text}`;
        line++;
        setTimeout(nextLine, 320);
      }
    }

    nextLine();
  }

});
