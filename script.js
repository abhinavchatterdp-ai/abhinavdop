// Portfolio interactions: custom cursor, scroll reveals, and mobile navigation.
const cursor = document.querySelector('.cursor');
const finePointer = window.matchMedia('(pointer: fine)').matches;

// Use a lerped requestAnimationFrame loop so the cursor feels physical rather than animated by CSS.
if (finePointer && cursor) {
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let cursorX = mouseX, cursorY = mouseY;
  window.addEventListener('mousemove', (event) => { mouseX = event.clientX; mouseY = event.clientY; });
  const renderCursor = () => {
    cursorX += (mouseX - cursorX) * 0.16;
    cursorY += (mouseY - cursorY) * 0.16;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };
  renderCursor();

  document.querySelectorAll('a, button, [data-cursor]').forEach((target) => {
    target.addEventListener('mouseenter', () => {
      cursor.classList.add('is-hovering');
      const label = target.dataset.cursor || (target.tagName === 'BUTTON' ? 'menu' : 'open');
      cursor.querySelector('span').textContent = label;
    });
    target.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
  });
}

// Reveal content as it enters the viewport.
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Mobile menu toggles into a full-screen navigation.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
