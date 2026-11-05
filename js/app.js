/* Shell bersama: navigasi, footer, tema, notifikasi, toast, dan utilitas. */
(function () {
  const $ = (selector, root=document) => root.querySelector(selector);
  const page = document.body.dataset.page || 'home';
  const navItems = [
    ['home','Beranda','index.html'],['materi','Materi','materi.html'],['latihan','Latihan Soal','latihan.html'],['tryout','Tryout','tryout.html'],['tentang','Tentang Kami','tentang.html']
  ];
  const header = $('#site-header');
  if (header) {
    const user = window.SagaStore && SagaStore.isLoggedIn();
    header.innerHTML = `
      <div class="topbar"><a class="brand" href="index.html" aria-label="SagaToEdu, kembali ke beranda"><span class="brand-mark">S<span>✦</span></span><span class="brand-copy">SagaToEdu<small>LEARN • GROW • SHINE</small></span></a>
      <button class="mobile-menu-toggle icon-button" aria-label="Buka menu navigasi" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="main-nav" aria-label="Navigasi utama"><div class="nav-links">${navItems.map(([key,label,url])=>`<a href="${url}" class="nav-link ${page===key?'active':''}" ${page===key?'aria-current="page"':''}>${label}</a>`).join('')}</div>
      <div class="nav-actions"><button class="icon-button theme-toggle" type="button" aria-label="Ganti tema" title="Ganti tema">☾</button><a class="nav-login" href="${user?'dashboard.html':'login.html'}">${user?'Dashboard':'Masuk'}</a><a class="button button-small button-primary" href="${user?'profil.html':'register.html'}">${user?'Profil':'Daftar gratis'} <span>↗</span></a></div></nav></div>`;
  }
  const footer = $('#site-footer');
  if (footer) footer.innerHTML = `
    <div class="footer-main"><div class="footer-brand"><a class="brand brand-light" href="index.html"><span class="brand-mark">S<span>✦</span></span><span class="brand-copy">SagaToEdu<small>LEARN • GROW • SHINE</small></span></a><p>Ruang belajar yang hangat untuk rasa ingin tahu yang tak pernah selesai.</p><div class="social-links"><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">ig</a><a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">▶</a><a href="mailto:halo@sagatoedu.example" aria-label="Email">✉</a></div></div>
    <div><h3>Jelajahi</h3><a href="materi.html">Semua materi</a><a href="latihan.html">Latihan soal</a><a href="tryout.html">Simulasi tryout</a><a href="dashboard.html">Dashboard</a></div>
    <div><h3>SagaToEdu</h3><a href="tentang.html">Tentang kami</a><a href="profil.html">Profil pelajar</a><a href="register.html">Buat akun demo</a></div>
    <div><h3>Kontak</h3><a href="mailto:halo@sagatoedu.example">halo@sagatoedu.example</a><span class="footer-note">Senang mendengar ide dan masukanmu.</span><span class="footer-note">Dibuat untuk perjalanan belajar yang lebih bermakna.</span></div></div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} SagaToEdu. Belajar bertumbuh bersama.</span><span>Versi demo edukasi · Data tersimpan di perangkatmu</span></div>`;

  const storedTheme = SagaStore.get('theme') || 'light';
  document.documentElement.dataset.theme = storedTheme;
  function refreshThemeButton() {
    const button = $('.theme-toggle');
    if (button) { button.textContent = document.documentElement.dataset.theme === 'dark' ? '☀' : '☾'; button.title = document.documentElement.dataset.theme === 'dark' ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'; }
  }
  refreshThemeButton();
  document.addEventListener('click', (event) => {
    const theme = event.target.closest('.theme-toggle');
    if (theme) { const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = next; SagaStore.set('theme', next); refreshThemeButton(); }
    const menuButton = event.target.closest('.mobile-menu-toggle');
    if (menuButton) { const nav = $('.main-nav'); const open = nav.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi'); }
    if (event.target.closest('.main-nav a')) { $('.main-nav')?.classList.remove('is-open'); $('.mobile-menu-toggle')?.setAttribute('aria-expanded','false'); }
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { $('.main-nav')?.classList.remove('is-open'); $('.mobile-menu-toggle')?.setAttribute('aria-expanded','false'); } });

  let toastTimer;
  window.showToast = function (message, type='success') {
    let toast = $('#toast-region');
    if (!toast) { toast = document.createElement('div'); toast.id = 'toast-region'; toast.className = 'toast-region'; toast.setAttribute('role','status'); toast.setAttribute('aria-live','polite'); document.body.appendChild(toast); }
    toast.innerHTML = `<span class="toast-icon">${type==='error'?'!':'✓'}</span><span>${escapeHTML(message)}</span>`;
    toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(()=>toast.classList.remove('visible'),3000);
  };
  window.escapeHTML = function (value) { return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); };
  window.formatDate = function (value) { return new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'short',year:'numeric'}).format(new Date(value)); };
  window.randomSample = function (items, count) { const copy=[...items]; for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];} return copy.slice(0,count); };
  window.updateActivity = () => SagaStore.markActivity();
  const topButton = $('#scroll-top');
  if (topButton) { window.addEventListener('scroll',()=>topButton.classList.toggle('show',window.scrollY>500),{passive:true}); topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); }
  const year = $('#current-year'); if (year) year.textContent = new Date().getFullYear();
})();
