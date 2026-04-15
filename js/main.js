/* ═══════════════════════════════════════════════════
   TECH MALL CONSULTANCY — MAIN JAVASCRIPT
   ═══════════════════════════════════════════════════ */

'use strict';

// ══════════════════════════════════
// PRELOADER
// ══════════════════════════════════
window.addEventListener('load', () => {
  setTimeout(() => {
    const pre = document.getElementById('preloader');
    if (pre) pre.classList.add('hide');
  }, 1500);
});

// ══════════════════════════════════
// SCROLL PROGRESS + NAVBAR
// ══════════════════════════════════
(function initScroll() {
  const bar = document.getElementById('scroll-progress');
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (bar) bar.style.width = pct + '%';
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();

// ══════════════════════════════════
// ACTIVE NAV HIGHLIGHT
// ══════════════════════════════════
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => io.observe(s));
})();

// ══════════════════════════════════
// HERO CANVAS — PARTICLES
// ══════════════════════════════════
(function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.vx = (Math.random() - .5) * .45; this.vy = (Math.random() - .5) * .45;
      this.r = Math.random() * 1.6 + .4;
      this.colors = ['rgba(0,212,255,', 'rgba(123,47,255,', 'rgba(0,255,231,'];
      this.color = this.colors[Math.floor(Math.random() * 3)];
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color + '0.85)';
      ctx.fill();
    }
  }

  for (let i = 0; i < 130; i++) particles.push(new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${(1 - dist / 130) * 0.14})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.fillStyle = 'rgba(2,5,16,0.16)';
    ctx.fillRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
})();

// ══════════════════════════════════
// TYPING EFFECT
// ══════════════════════════════════
(function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const phrases = [
    'Digital Marketing | IT Solutions',
    'Legal & CA Services | Compliance',
    'Career Consultancy | Admissions',
    'Your Trusted Growth Partner'
  ];
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ci + 1);
      ci++;
      if (ci === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
    } else {
      el.textContent = phrase.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 38 : 62);
  }
  setTimeout(type, 1200);
})();

// ══════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// ══════════════════════════════════
// COUNTER ANIMATION
// ══════════════════════════════════
(function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = '1';
        const target = +e.target.dataset.target;
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 65));
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          e.target.textContent = current.toLocaleString();
          if (current >= target) clearInterval(timer);
        }, 22);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(el => io.observe(el));
})();

// ══════════════════════════════════
// THEME TOGGLE
// ══════════════════════════════════
(function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const html = document.documentElement;
  let dark = true;

  btn.addEventListener('click', () => {
    dark = !dark;
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    btn.textContent = dark ? '🌙' : '☀️';
  });
})();

// ══════════════════════════════════
// HAMBURGER MENU
// ══════════════════════════════════
(function initHamburger() {
  const hbg = document.getElementById('hamburger');
  const nav = document.getElementById('navbar');
  if (!hbg || !nav) return;

  hbg.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    hbg.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      hbg.classList.remove('open');
    });
  });
})();

// ══════════════════════════════════
// PORTFOLIO FILTER
// ══════════════════════════════════
(function initFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.opacity = match ? '1' : '0.25';
        item.style.transform = match ? 'scale(1)' : 'scale(0.94)';
        item.style.pointerEvents = match ? 'auto' : 'none';
      });
    });
  });
})();

// ══════════════════════════════════
// PARALLAX HERO
// ══════════════════════════════════
(function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroContent.style.transform = `translateY(${scrollY * 0.28}px)`;
    heroContent.style.opacity = Math.max(0, 1 - scrollY / 580);
  }, { passive: true });
})();

// ══════════════════════════════════
// SMOOTH SCROLL HELPERS
// ══════════════════════════════════
function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('navbar')?.classList.remove('menu-open');
  document.getElementById('hamburger')?.classList.remove('open');
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// ══════════════════════════════════
// FORM SUBMIT
// ══════════════════════════════════
function handleSubmit() {
  const btn = document.querySelector('.btn-submit');
  const name = document.getElementById('name')?.value.trim();
  if (!name) { alert('Please fill in your name.'); return; }

  const orig = btn.textContent;
  btn.textContent = '⏳ Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✅ Message Sent! We\'ll reach out soon.';
    btn.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.disabled = false;
    }, 4500);
  }, 1200);
}
