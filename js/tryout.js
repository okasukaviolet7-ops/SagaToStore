/* Sesi tryout dengan timestamp absolut; refresh tidak mengulang timer. */
(function () {
  const $=(s,r=document)=>r.querySelector(s), list=$('#tryout-list'), stage=$('#tryout-stage');
  const exams=window.SagaData?.tryouts||[], bank=window.SagaData?.questions||[];
  if(!list||!stage)return;
  let timerId=null;
  function renderList(){
    list.innerHTML=exams.map(exam=>`<article class="tryout-card"><div class="tryout-illustration ${exam.id==='tryout-sains'?'science':'general'}"><span>${exam.id==='tryout-sains'?'⚗':'🧭'}</span><i>✦</i></div><div class="tryout-card-body"><span class="eyebrow">SIMULASI TERARAH</span><h3>${escapeHTML(exam.title)}</h3><p>${escapeHTML(exam.description)}</p><div class="tryout-meta"><span>▤ ${exam.questions} soal</span><span>◷ ${exam.duration} menit</span><span>✦ ${escapeHTML(exam.level)}</span></div><button class="button button-primary button-full" data-open-exam="${exam.id}">Lihat detail & mulai →</button></div></article>`).join('');
  }
  function showDetail(exam){
    stage.hidden=false; stage.innerHTML=`<div class="exam-detail"><button class="back-link" id="exam-back">← Kembali ke daftar</button><div class="eyebrow">PERSIAPAN UJIAN</div><h2>${escapeHTML(exam.title)}</h2><p>${escapeHTML(exam.description)}</p><div class="exam-facts"><div><strong>${exam.questions}</strong><span>Jumlah soal</span></div><div><strong>${exam.duration}</strong><span>Menit</span></div><div><strong>${escapeHTML(exam.level)}</strong><span>Level</span></div></div><h3>Petunjuk pengerjaan</h3><ol class="instruction-list">${exam.instruction.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ol><div class="warning-note"><span>⏱</span><p>Timer dimulai saat kamu menekan tombol mulai. Pastikan koneksi dan perangkatmu siap. Sesi demo hanya tersimpan di browser ini.</p></div><button class="button button-primary button-large" id="start-exam">Mulai simulasi <span>→</span></button></div>`;
    $('#exam-back').addEventListener('click',()=>{stage.hidden=true;});
    $('#start-exam').addEventListener('click',()=>startExam(exam)); stage.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function startExam(exam){
    const pool=exam.id==='tryout-sains'?bank.filter(q=>['Matematika','Fisika','Kimia','Biologi'].includes(q.subject)):bank;
    const questions=randomSample(pool,exam.questions);
    const session={examId:exam.id,questions,answers:{},startedAt:Date.now(),endsAt:Date.now()+exam.duration*60*1000};
    SagaStore.set('activeTryout',session); renderExam(session);
  }
  function renderExam(session){
    const exam=exams.find(e=>e.id===session.examId); if(!exam){SagaStore.set('activeTryout',null);renderList();return;}
    const remaining=Math.max(0,session.endsAt-Date.now());
    if(remaining<=0){finishExam(session,true);return;}
    list.hidden=true; stage.hidden=false;
    const index=Math.min(session.currentIndex||0,session.questions.length-1), q=session.questions[index], picked=session.answers[q.id];
    stage.innerHTML=`<div class="exam-workspace"><div class="exam-topbar"><div><span class="eyebrow">SEDANG BERLANGSUNG</span><h2>${escapeHTML(exam.title)}</h2></div><div class="exam-timer" id="exam-timer" role="timer" aria-live="off">${formatTime(remaining)}</div></div><div class="exam-progress"><span style="width:${((index+1)/session.questions.length)*100}%"></span></div><div class="exam-layout"><div class="exam-main"><div class="quiz-meta"><span>Soal ${index+1} dari ${session.questions.length}</span><span>${escapeHTML(q.subject)}</span></div><h3 class="quiz-question">${escapeHTML(q.q)}</h3><div class="quiz-options">${q.options.map((option,i)=>`<button class="quiz-option ${picked===i?'selected':''}" data-exam-answer="${i}" type="button"><b>${'ABCDE'[i]}</b><span>${escapeHTML(option)}</span><i>${picked===i?'✓':''}</i></button>`).join('')}</div><div class="exam-nav"><button class="button button-outline" id="exam-prev" ${index===0?'disabled':''}>← Sebelumnya</button><button class="button button-primary" id="exam-next">${index===session.questions.length-1?'Periksa jawaban':'Soal berikutnya →'}</button></div></div><aside class="exam-aside"><h3>Navigasi soal</h3><p>Pilih nomor untuk berpindah soal.</p><div class="exam-number-grid">${session.questions.map((question,i)=>`<button type="button" data-exam-jump="${i}" class="${session.answers[question.id]!==undefined?'answered':''} ${i===index?'current':''}">${i+1}</button>`).join('')}</div><div class="legend"><span><i class="answered"></i> Terjawab</span><span><i></i> Kosong</span></div><button class="button button-primary button-full" id="finish-exam">Selesai & kumpulkan</button></aside></div><p class="save-hint">✓ Jawaban tersimpan otomatis di perangkat ini.</p></div>`;
    stage.querySelectorAll('[data-exam-answer]').forEach(btn=>btn.addEventListener('click',()=>{session.answers[q.id]=Number(btn.dataset.examAnswer);session.currentIndex=index;SagaStore.set('activeTryout',session);renderExam(session);}));
    stage.querySelectorAll('[data-exam-jump]').forEach(btn=>btn.addEventListener('click',()=>{session.currentIndex=Number(btn.dataset.examJump);SagaStore.set('activeTryout',session);renderExam(session);}));
    $('#exam-prev')?.addEventListener('click',()=>{session.currentIndex=index-1;SagaStore.set('activeTryout',session);renderExam(session);});
    $('#exam-next')?.addEventListener('click',()=>{if(index===session.questions.length-1){document.querySelector('.exam-aside')?.scrollIntoView({behavior:'smooth'});showToast('Periksa jawabanmu, lalu kumpulkan saat siap.');return;}session.currentIndex=index+1;SagaStore.set('activeTryout',session);renderExam(session);});
    $('#finish-exam')?.addEventListener('click',()=>{if(confirm('Yakin ingin mengakhiri tryout dan melihat hasil?'))finishExam(session,false);});
    clearInterval(timerId); timerId=setInterval(()=>{const left=session.endsAt-Date.now(), timer=$('#exam-timer');if(timer)timer.textContent=formatTime(left);if(left<=0){clearInterval(timerId);finishExam(session,true);}},500);
  }
  function formatTime(ms){const seconds=Math.max(0,Math.ceil(ms/1000));return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;}
  function finishExam(session,auto){
    clearInterval(timerId);const questions=session.questions, correct=questions.filter(q=>session.answers[q.id]===q.answer).length,total=questions.length,score=Math.round(correct/total*100), exam=exams.find(e=>e.id===session.examId);
    SagaStore.saveTryout({id:session.examId,title:exam?.title||'Tryout',date:new Date().toISOString(),correct,total,score,autoSubmitted:auto}); SagaStore.markActivity();
    list.hidden=true;stage.hidden=false;
    stage.innerHTML=`<div class="result-hero"><div class="result-medal">${score>=80?'🏆':score>=60?'🌟':'🌱'}</div><span class="eyebrow">${auto?'WAKTU HABIS':'SIMULASI SELESAI'}</span><h2>${score>=80?'Hebat, explorer!':score>=60?'Terus bertumbuh!':'Setiap latihan adalah kemajuan.'}</h2><div class="score-number">${score}<small>/100</small></div><p>Skor demo kamu: ${correct} jawaban benar dari ${total} soal.</p><div class="result-stats"><div><strong>${correct}</strong><span>Benar</span></div><div><strong>${total-correct}</strong><span>Salah/kosong</span></div><div><strong>${total}</strong><span>Total soal</span></div></div><a href="dashboard.html" class="button button-primary">Lihat dashboard →</a></div><div class="review-header"><div><span class="eyebrow">EVALUASI</span><h3>Pembahasan tryout</h3></div><button class="button button-outline" id="back-exams">Daftar tryout</button></div><div class="review-list">${questions.map((q,i)=>{const a=session.answers[q.id],ok=a===q.answer;return `<article class="review-item"><div class="review-question-head"><span class="review-number">${i+1}</span><span class="review-status ${ok?'correct':'wrong'}">${ok?'✓ Benar':'✕ Belum tepat'}</span></div><h4>${escapeHTML(q.q)}</h4><p>Jawabanmu: <strong>${a===undefined?'Belum dijawab':`${'ABCDE'[a]}. ${escapeHTML(q.options[a])}`}</strong></p><p>Jawaban benar: <strong>${'ABCDE'[q.answer]}. ${escapeHTML(q.options[q.answer])}</strong></p><div class="explanation"><b>Pembahasan</b><p>${escapeHTML(q.explanation)}</p></div></article>`;}).join('')}</div>`;
    $('#back-exams').addEventListener('click',()=>{stage.hidden=true;list.hidden=false;});
  }
  function resumeSaved(){const active=SagaStore.get('activeTryout');if(active){const exam=exams.find(e=>e.id===active.examId);if(exam){showToast('Sesi tryout sebelumnya ditemukan. Timer tetap berjalan.');renderExam(active);return;}}}
  list.addEventListener('click',event=>{const btn=event.target.closest('[data-open-exam]');if(btn){const exam=exams.find(e=>e.id===btn.dataset.openExam);if(exam)showDetail(exam);}});
  renderList();resumeSaved();
})();
