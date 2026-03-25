(function(){
  const path = location.pathname;
  const depth = (path.match(/\//g) || []).length;
  // depth=1: /index.html (root)
  // depth=2: /pages/works.html (one level)
  // depth=3: /pages/works/w1.html (two levels)
  let b;
  if (path.includes('/pages/works/') || path.includes('/pages/works\\')) {
    b = '../../';
  } else if (path.includes('/pages/')) {
    b = '../';
  } else {
    b = '';
  }

  const navLinks = [
    ['HOME',           b+'index.html'],
    ['WORKS',          b+'pages/works.html'],
    ['THE LAB NOTES',  b+'pages/lab.html'],
    ['ABOUT',          b+'pages/about.html'],
    ['CONTACT',        b+'pages/contact.html'],
  ];

  const mobileLinks  = navLinks.map(([t,h]) => `<li><a href="${h}">${t}</a></li>`).join('');
  const sidebarLinks = navLinks.map(([t,h]) => `<a href="${h}">${t}</a>`).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="mobile-nav" id="mobile-nav">
      <ul class="mobile-nav-links">${mobileLinks}</ul>
      <div class="mobile-nav-icons">
        <a href="https://linkedin.com/in/akshatvyavahare" target="_blank" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8.01"/><path d="M12 16v-5M16 16v-3a2 2 0 00-4 0"/></svg>
        </a>
        <a href="mailto:akshatvyavahare@yahoo.com" aria-label="Email">
          <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
        <a href="https://medium.com/@akshatvyavahare" target="_blank" aria-label="Medium">
          <svg viewBox="0 0 24 24"><circle cx="5.5" cy="12" r="3.5"/><ellipse cx="14.5" cy="12" rx="3" ry="3.5"/><ellipse cx="21" cy="12" rx="1.5" ry="3.5"/></svg>
        </a>
      </div>
    </nav>

    <aside class="sidebar">
      <nav>${sidebarLinks}</nav>
      <div class="sidebar-sup">
        <a href="https://superlative.cc" target="_blank">↗ superlative.cc</a>
      </div>
      <div class="sidebar-icons">
        <a href="https://linkedin.com/in/akshatvyavahare" target="_blank" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8.01"/><path d="M12 16v-5M16 16v-3a2 2 0 00-4 0"/></svg>
        </a>
        <a href="mailto:akshatvyavahare@yahoo.com" aria-label="Email">
          <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
        <a href="https://medium.com/@akshatvyavahare" target="_blank" aria-label="Medium">
          <svg viewBox="0 0 24 24"><circle cx="5.5" cy="12" r="3.5"/><ellipse cx="14.5" cy="12" rx="3" ry="3.5"/><ellipse cx="21" cy="12" rx="1.5" ry="3.5"/></svg>
        </a>
      </div>
      <div class="sidebar-footer">© Akshat Vyavahare</div>
    </aside>

    <div class="toggle-btn" id="toggle"><div class="toggle-knob"></div></div>
    <div id="cur"></div>
  `);
})();
