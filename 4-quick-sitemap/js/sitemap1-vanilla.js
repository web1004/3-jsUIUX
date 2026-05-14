const btn = document.querySelector('.sitemap_btn');
const footer = document.querySelector('.footer_sitemap');
const sitemap = document.querySelector('.sitemap');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
  const open = footer.classList.toggle('open');
  sitemap.classList.toggle('open',open);

  icon.classList.toggle('fa-chevron-up', open);
  icon.classList.toggle('fa-chevron-down', !open);
});