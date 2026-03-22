// cursor
const cur = document.getElementById('cur');
if (cur) document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX + 'px';
  cur.style.top  = e.clientY + 'px';
});

// theme — persist across pages
const tog = document.getElementById('toggle');
if (tog) {
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
  tog.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

// active nav — mark current page in both sidebar and mobile nav
(function(){
  const p = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a, .mobile-nav-links a').forEach(a => {
    if (a.getAttribute('href').split('/').pop() === p) a.classList.add('active');
  });
})();

// scroll reveal
const ro = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// count-up
const co = new IntersectionObserver(es => {
  es.forEach(e => {
    if (!e.isIntersecting || e.target.dataset.done) return;
    e.target.dataset.done = 1;
    const target = parseFloat(e.target.dataset.t);
    const pre = e.target.dataset.pre || '';
    const suf = e.target.dataset.suf || '';
    const dec = String(target).includes('.') ? 1 : 0;
    const dur = 1200, t0 = performance.now();
    const step = now => {
      const p = Math.min((now - t0) / dur, 1);
      const v = target * (1 - Math.pow(1-p, 3));
      e.target.textContent = pre + v.toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: .3 });
document.querySelectorAll('.cu').forEach(el => co.observe(el));

// contact form
const frm = document.getElementById('cf');
if (frm) frm.addEventListener('submit', e => {
  e.preventDefault();
  const btn = frm.querySelector('button');
  btn.textContent = 'SENT ✓'; btn.style.opacity = '.5';
  setTimeout(() => { btn.textContent = 'SEND MESSAGE'; btn.style.opacity = '1'; frm.reset(); }, 3000);
});
