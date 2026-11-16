(()=>{
  const b=document.querySelector('.menu'),n=document.querySelector('.nav');
  if(b&&n)b.addEventListener('click',()=>{
    n.classList.toggle('open');
    b.setAttribute('aria-expanded',n.classList.contains('open'));
  });
  const s=document.querySelector('[data-search]');
  if(s)s.addEventListener('input',()=>{
    const q=s.value.toLowerCase();
    document.querySelectorAll('[data-search-item]').forEach(x=>{
      x.hidden=!x.textContent.toLowerCase().includes(q);
    });
  });
  const l=document.createElement('link');
  l.rel='stylesheet';
  l.href='assets/image-fix.css';
  document.head.appendChild(l);
})();