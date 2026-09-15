// ---------- Burger Bits — interações da landing page ----------

document.addEventListener('DOMContentLoaded', () => {

  /* Destaca o link do menu correspondente à seção visível no scroll */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  /* Pausa a esteira de chips (.strip-track) ao tocar/clicar no mobile,
     já que não existe :hover em telas touch */
  const strip = document.querySelector('.strip');
  const stripTrack = document.querySelector('.strip-track');

  if (strip && stripTrack) {
    strip.addEventListener('click', () => {
      stripTrack.style.animationPlayState =
        stripTrack.style.animationPlayState === 'paused' ? 'running' : 'paused';
    });
  }

  /* Pequeno efeito de "flicker" extra no CRT frame do hero ao clicar,
     reforçando a referência de tela de videogame ligando */
  const crtFrame = document.querySelector('.crt-frame');
  if (crtFrame) {
    crtFrame.addEventListener('click', () => {
      crtFrame.style.animation = 'none';
      requestAnimationFrame(() => {
        crtFrame.style.animation = '';
      });
    });
  }

});
