// ════════════════════════════════════════════
//  Happy GAZOZO Portfolio — Main JS
// ════════════════════════════════════════════

// ── Year ─────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Smooth Scroll (Lenis) ─────────────────────
let lenis;
if (window.Lenis) {
  lenis = new Lenis({ lerp: 0.08, smooth: true, direction: 'vertical' });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

// ── Custom Cursor ─────────────────────────────
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mx = 0, my = 0, cx = 0, cy = 0;

window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
});

function animateCursor() {
  cx += (mx - cx) * 0.12;
  cy += (my - cy) * 0.12;
  cursor.style.left = cx + 'px';
  cursor.style.top  = cy + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ── Navbar Scroll ─────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Hamburger / Mobile Menu ───────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('[data-close-menu]').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ── Scroll Reveal (IntersectionObserver) ──────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.closest('[style*="--delay"]')
        ?.style.getPropertyValue('--delay') || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay * 120);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Page Load Animation ───────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const seq = [
    '.nav__brand',
    '.nav__links',
    '.hero__eyebrow',
    '.hero__name',
    '.hero__sub',
    '.hero__cta',
    '.hero__scroll-hint',
  ];
  seq.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity .7s cubic-bezier(0.25,0.46,0.45,0.94), transform .7s cubic-bezier(0.25,0.46,0.45,0.94)`;
    setTimeout(() => {
      el.style.opacity = '';
      el.style.transform = '';
    }, 200 + i * 180);
  });
});

// ── Portfolio Modal ───────────────────────────
const portfolioData = [
  { cat: 'Éditorial', title: 'Séance 01', desc: 'Shoot éditorial épuré — lumière naturelle, émotion brute, contraste fort.' },
  { cat: 'Commercial', title: 'Séance 02', desc: 'Campagne commerciale mettant en valeur la polyvalence et l\'élégance naturelle.' },
  { cat: 'Beauté', title: 'Séance 03', desc: 'Étude beauté en gros plan — peau, texture et regard expressif.' },
  { cat: 'Mode Urbaine', title: 'Séance 04', desc: 'Éditorial mode urbaine en extérieur, dans les rues de Lomé.' },
  { cat: 'Défilé', title: 'Séance 05', desc: 'Coulisses et moments de défilés lors d\'événements mode locaux.' },
  { cat: 'Éditorial', title: 'Séance 06', desc: 'Éditorial haute mode explorant la silhouette et la forme.' },
];
const imagesSrc = [
  '/images/image-2.jpeg',
  '/images/image-3.jpeg',
  '/images/image-4.jpeg',
  '/images/image-5.jpeg',
  '/images/image-6.jpeg',
  '/images/image-7.jpeg',
];

const modal         = document.getElementById('portfolioModal');
const backdrop      = document.getElementById('modalBackdrop');
const modalImage    = document.getElementById('modalImage');
const modalCat      = document.getElementById('modalCat');
const modalTitle    = document.getElementById('modalTitle');
const modalDesc     = document.getElementById('modalDesc');
const modalClose    = document.getElementById('modalClose');
const modalPrev     = document.getElementById('modalPrev');
const modalNext     = document.getElementById('modalNext');
let currentIndex    = 0;

function openModal(index) {
  currentIndex = index;
  updateModal();
  modal.classList.add('open');
  backdrop.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('open');
  backdrop.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateModal() {
  const d = portfolioData[currentIndex];
  modalImage.src = imagesSrc[currentIndex];
  modalImage.alt = d.title;
  modalCat.textContent   = d.cat;
  modalTitle.textContent = d.title;
  modalDesc.textContent  = d.desc;
}

document.querySelectorAll('.portfolio__btn').forEach((btn, i) => {
  btn.addEventListener('click', () => openModal(i));
});

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

modalPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
  updateModal();
});
modalNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % portfolioData.length;
  updateModal();
});

// Keyboard + swipe
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length; updateModal(); }
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % portfolioData.length; updateModal(); }
});

let touchStartX = 0;
modal.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
modal.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) { currentIndex = (currentIndex + 1) % portfolioData.length; }
    else        { currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length; }
    updateModal();
  }
});

// ── Booking Form (removed) ───────────────────────
