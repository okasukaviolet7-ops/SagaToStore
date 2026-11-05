/* Katalog, detail, bookmark, dan progres materi. */
(function () {
  const data=window.SagaData?.materials||[];
  const $=(s,r=document)=>r.querySelector(s);
  const grid=$('#materials-grid');
  const subjectOptions=[...new Set(data.map(item=>item.subject))].sort();
  const materialCard=item=>`<article class="material-card"><div class="material-card-top"><span class="subject-icon ${item.color}">${escapeHTML(item.icon)}</span><button class="bookmark-button ${SagaStore.isBookmarked(item.id)?'saved':''}" data-bookmark="${item.id}" aria-label="${SagaStore.isBookmarked(item.id)?'Hapus':'Simpan'} ${escapeHTML(item.title)}" aria-pressed="${SagaStore.isBookmarked(item.id)}">${SagaStore.isBookmarked(item.id)?'★':'☆'}</button></div><div class="card-meta"><span>${escapeHTML(item.subject)}</span><span>•</span><span>${escapeHTML(item.level)}</span></div><h3><a href="detail-materi.html?id=${encodeURIComponent(item.id)}">${escapeHTML(item.title)}</a></h3><p>${escapeHTML(item.description)}</p><div class="material-card-footer"><span>◷ ${item.minutes} menit</span><span class="difficulty ${item.difficulty.toLowerCase()}">${escapeHTML(item.difficulty)}</span></div><a class="text-link" href="detail-materi.html?id=${encodeURIComponent(item.id)}">Pelajari materi <span>↗</span></a></article>`;
  if(grid){
    const search=$('#material-search'), category=$('#material-category'), level=$('#material-level'), sort=$('#material-sort');
    category.innerHTML='<option value="all">Semua mata pelajaran</option>'+subjectOptions.map(s=>`<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('');
    const subjectParam=new URLSearchParams(location.search).get('subject');
    if(subjectParam && subjectOptions.includes(subjectParam)) category.value=subjectParam;
    let favoritesOnly=false;
    function render(){
      const query=(search.value||'').toLowerCase().trim(); let filtered=data.filter(item=>(item.title+' '+item.description+' '+item.subject+' '+item.tags.join(' ')).toLowerCase().includes(query)&&(category.value==='all'||item.subject===category.value)&&(level.value==='all'||item.level===level.value)&&(!favoritesOnly||SagaStore.isBookmarked(item.id)));
      if(sort.value==='newest') filtered=[...filtered].reverse(); if(sort.value==='az') filtered.sort((a,b)=>a.title.localeCompare(b.title,'id')); if(sort.value==='time') filtered.sort((a,b)=>a.minutes-b.minutes);
      grid.innerHTML=filtered.length?filtered.map(materialCard).join(''):'<div class="empty-state wide"><span>🔎</span><h3>Materi belum ditemukan</h3><p>Coba kata kunci atau filter yang berbeda.</p><button class="button button-outline" id="reset-materials">Reset filter</button></div>';
      const count=$('#material-count'); if(count) count.textContent=`Menampilkan ${filtered.length} dari ${data.length} materi`;
      $('#reset-materials')?.addEventListener('click',()=>{search.value='';category.value='all';level.value='all';sort.value='newest';render();});
    }
    [search,category,level,sort].forEach(el=>el.addEventListener(el===search?'input':'change',render));
    $('#favorites-filter')?.addEventListener('click',event=>{favoritesOnly=!favoritesOnly;event.currentTarget.setAttribute('aria-pressed',String(favoritesOnly));event.currentTarget.textContent=favoritesOnly?'★ Tampilkan semua':'☆ Favorit saya';render();});
    grid.addEventListener('click',event=>{const button=event.target.closest('[data-bookmark]');if(!button)return;const saved=SagaStore.toggleBookmark(button.dataset.bookmark);showToast(saved?'Materi ditambahkan ke favorit.':'Materi dihapus dari favorit.');render();});
    render();
    if(new URLSearchParams(location.search).get('focus')==='search') search.focus();
  }
  const detail=$('#material-detail');
  if(detail){
    const params=new URLSearchParams(location.search), id=params.get('id')||data[0]?.id, item=data.find(m=>m.id===id);
    if(!item){detail.innerHTML='<div class="empty-state"><span>📚</span><h2>Materi tidak ditemukan</h2><p>Materi yang kamu cari mungkin sudah dipindahkan.</p><a class="button button-primary" href="materi.html">Kembali ke katalog</a></div>';return;}
    const index=data.findIndex(m=>m.id===id), prev=data[index-1], next=data[index+1], completed=(SagaStore.get('completed')||[]).includes(id);
    detail.innerHTML=`<div class="detail-heading"><a class="back-link" href="materi.html">← Kembali ke materi</a><div class="detail-title-row"><div><div class="eyebrow">${escapeHTML(item.subject)} · ${escapeHTML(item.level)}</div><h1>${escapeHTML(item.title)}</h1><p>${escapeHTML(item.description)}</p><div class="detail-meta"><span>◷ ${item.minutes} menit</span><span>✦ ${escapeHTML(item.difficulty)}</span><span>📖 ${item.content.length} subbab</span></div></div><div class="detail-icon ${item.color}">${escapeHTML(item.icon)}</div></div></div>
      <div class="lesson-layout"><aside class="lesson-sidebar"><div class="sidebar-title">Di materi ini</div><nav class="lesson-toc">${item.content.map((section,i)=>`<a href="#lesson-${i+1}"><span>0${i+1}</span>${escapeHTML(section.heading)}</a>`).join('')}<a href="#contoh-soal"><span>✎</span>Contoh soal</a><a href="#ringkasan"><span>✓</span>Ringkasan</a></nav><button class="button ${completed?'button-soft':'button-primary'} button-full" id="complete-material">${completed?'✓ Sudah selesai':'Tandai selesai'}</button><button class="button button-outline button-full" id="detail-bookmark">${SagaStore.isBookmarked(id)?'★ Tersimpan':'☆ Simpan favorit'}</button></aside>
      <article class="lesson-content">${item.content.map((section,i)=>`<section class="lesson-section" id="lesson-${i+1}"><span class="section-kicker">BAGIAN 0${i+1}</span><h2>${escapeHTML(section.heading)}</h2><p>${escapeHTML(section.body)}</p>${section.formula?`<div class="formula-box">${escapeHTML(section.formula)}</div>`:''}${section.note?`<div class="lesson-note"><span>💡</span>${escapeHTML(section.note)}</div>`:''}</section>`).join('')}
      <section class="lesson-section example-box" id="contoh-soal"><span class="section-kicker">UJI PEMAHAMAN</span><h2>Contoh soal</h2><p class="example-question">${escapeHTML(item.example.q)}</p><div class="example-options">${item.example.options.map((option,i)=>`<div class="example-option"><b>${'ABCDE'[i]}</b><span>${escapeHTML(option)}</span></div>`).join('')}</div><details class="answer-reveal"><summary>Lihat jawaban & pembahasan</summary><p><strong>Jawaban: ${'ABCDE'[item.example.answer]}.</strong> ${escapeHTML(item.example.explanation)}</p></details></section>
      <section class="lesson-section summary-box" id="ringkasan"><span class="section-kicker">YANG PERLU DIINGAT</span><h2>Ringkasan materi</h2><ul>${item.summary.map(point=>`<li>${escapeHTML(point)}</li>`).join('')}</ul></section>
      <div class="lesson-pagination">${prev?`<a class="button button-outline" href="detail-materi.html?id=${prev.id}">← Materi sebelumnya</a>`:'<span></span>'}${next?`<a class="button button-primary" href="detail-materi.html?id=${next.id}">Materi berikutnya →</a>`:'<a class="button button-primary" href="materi.html">Selesai menjelajah →</a>'}</div></article></div>`;
    $('#complete-material')?.addEventListener('click',()=>{SagaStore.completeMaterial(id);$('#complete-material').textContent='✓ Sudah selesai';$('#complete-material').classList.remove('button-primary');$('#complete-material').classList.add('button-soft');showToast('Progres materi berhasil disimpan!');});
    $('#detail-bookmark')?.addEventListener('click',()=>{const saved=SagaStore.toggleBookmark(id);$('#detail-bookmark').textContent=saved?'★ Tersimpan':'☆ Simpan favorit';showToast(saved?'Materi disimpan ke favorit.':'Bookmark dihapus.');});
  }
})();
