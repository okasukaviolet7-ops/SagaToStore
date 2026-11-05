/* Akun lokal demonstrasi. Tidak menggantikan autentikasi backend produksi. */
(function () {
  const $ = (s,r=document)=>r.querySelector(s);
  async function hashPassword(password, salt) {
    const input = `${salt}:${password}`;
    if (window.crypto && crypto.subtle && window.isSecureContext) {
      const bytes = new TextEncoder().encode(input);
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,'0')).join('');
    }
    // Fallback non-kriptografis untuk file://; tetap bukan penyimpanan password plaintext.
    let h1=0x811c9dc5, h2=0x01000193;
    for (let i=0;i<input.length;i++){h1^=input.charCodeAt(i);h1=Math.imul(h1,0x01000193);h2=Math.imul(h2^input.charCodeAt(i),0x5bd1e995);}
    return `local-${(h1>>>0).toString(16)}-${(h2>>>0).toString(16)}`;
  }
  const registerForm = $('#register-form');
  if (registerForm) registerForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const name=$('#register-name').value.trim(), email=$('#register-email').value.trim().toLowerCase(), password=$('#register-password').value, confirm=$('#register-confirm').value;
    const error=$('#auth-error'); error.textContent='';
    if(name.length<2){error.textContent='Nama minimal terdiri dari 2 karakter.';return;}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){error.textContent='Masukkan alamat email yang valid.';return;}
    if(password.length<8){error.textContent='Password minimal 8 karakter.';return;}
    if(password!==confirm){error.textContent='Konfirmasi password belum cocok.';return;}
    const users=SagaStore.get('users')||[];
    if(users.some(user=>user.email===email)){error.textContent='Email sudah terdaftar di perangkat ini. Silakan masuk.';return;}
    const salt=`saga-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const passwordHash=await hashPassword(password,salt);
    users.push({name,email,salt,passwordHash,createdAt:new Date().toISOString()});
    SagaStore.set('users',users); SagaStore.set('profile',{name,email,avatar:'🦉',joinedAt:new Date().toISOString()}); SagaStore.set('session',{name,email});
    showToast('Akun demo berhasil dibuat. Selamat belajar!'); window.location.href='dashboard.html';
  });
  const loginForm=$('#login-form');
  if(loginForm) loginForm.addEventListener('submit',async event=>{
    event.preventDefault(); const email=$('#login-email').value.trim().toLowerCase(), password=$('#login-password').value, error=$('#auth-error'); error.textContent='';
    const user=(SagaStore.get('users')||[]).find(item=>item.email===email);
    if(!user || await hashPassword(password,user.salt)!==user.passwordHash){error.textContent='Email atau password tidak cocok dengan akun demo di perangkat ini.';return;}
    SagaStore.set('session',{name:user.name,email:user.email}); SagaStore.set('profile',{name:user.name,email:user.email,avatar:(SagaStore.get('profile')||{}).avatar||'🦉',joinedAt:user.createdAt});
    showToast('Berhasil masuk. Selamat datang kembali!'); window.location.href='dashboard.html';
  });
  document.addEventListener('click', event=>{
    if(!event.target.closest('[data-logout]')) return;
    if(!confirm('Keluar dari akun SagaToEdu di perangkat ini?')) return;
    SagaStore.set('session',null); showToast('Kamu sudah keluar.'); window.location.href='index.html';
  });
})();
