const trigger = document.querySelector('.trigger');
const sitemap = document.querySelector('.sitemap');

trigger.addEventListener('click', () => {
  const open = trigger.classList.toggle('active');
  sitemap.classList.toggle('open',open);
});