const header = document.getElementById('top-header');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const typewriterTarget = document.getElementById('typewriter');

const toggleMenu = () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
};

menuToggle.addEventListener('click', toggleMenu);

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 12);
});

const typewriterText = typewriterTarget.dataset.text || '';
let index = 0;

const typeNextCharacter = () => {
  if (index <= typewriterText.length) {
    typewriterTarget.textContent = typewriterText.slice(0, index);
    index += 1;
    setTimeout(typeNextCharacter, 90);
  }
};

typeNextCharacter();
