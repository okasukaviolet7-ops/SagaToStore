/* Mesin latihan: pemilihan soal, navigasi, penilaian dan pembahasan. */
(function () {
  const $=(s,r=document)=>r.querySelector(s), bank=window.SagaData?.questions||[];
  const setup=$('#practice-setup'), workspace=$('#practice-workspace'), result=$('#practice-result');
  if(!setup||!workspace||!result)return;
  const subjects=[...new Set(bank.map(q=>q.subject))].sort();
  $('#practice-subject').innerHTML='<option value="all">Semua mata pelajaran</option>'+subjects.map(s=>`<option>${escapeHTML(s)}</option>`).join('');
  let session=null;
  setup.addEventListener('submit',event=>{
    event.preventDefault(); const subject=$('#practice-subject').value, difficulty=$('#practice-difficulty').value, count=Number($('#practice-count').value);
    let pool=bank.filter(q=>(subject==='all'||q.subject===subject)&&(difficulty==='all'||q.difficulty===difficulty));
    if(!pool.length){showToast('Belum ada soal untuk kombinasi filter ini.','error');return;}
    session={questions:randomSample(pool,Math.min(count,pool.length)),answers:{},index:0,startedAt:Date.now()};
    setup.hidden=true; result.hidden=true; workspace.hidden=false; renderQuestion();
  });
  function renderQuestion(){
    const q=session.questions[session.index], picked=session.answers[q.id];
    workspace.innerHTML=`<div class="quiz-topline"><div><span class="eyebrow">LATIHAN SOAL</span><h2>Asah pemahamanmu</h2></div><span class="quiz-counter">${session.index+1} <small>/ ${session.questions.length}</small></span></div><div class="quiz-progress"><span style="width:${((session.index+1)/session.questions.length)*100}%"></span></div><div class="quiz-meta"><span>${escapeHTML(q.subject)} · ${escapeHTML(q.category)}</span><span class="difficulty ${q.difficulty.toLowerCase()}">${escapeHTML(q.difficulty)}</span></div><h3 class="quiz-question">${escapeHTML(q.q)}</h3><div class="quiz-options">${q.options.map((option,i)=>`<button type="button" class="quiz-option ${picked===i?'selected':''}" data-answer="${i}" aria-pressed="${picked===i}"><b>${'ABCDE'[i]}</b><span>${escapeHTML(option)}</span><i>${picked===i?'✓':''}</i></button>`).join('')}</div><div class="quiz-bottom"><button class="button button-outline" id="practice-prev" ${session.index===0?'disabled':''}>← Sebelumnya</button><div class="question-dots">${session.questions.map((question,i)=>`<button type="button" data-jump="${i}" class="${session.answers[question.id]!==undefined?'answered':''} ${i===session.index?'current':''}" aria-label="Ke soal ${i+1}">${i+1}</button>`).join('')}</div>${session.index===session.questions.length-1?'<button class="button button-primary" id="practice-submit">Kumpulkan jawaban ✓</button>':'<button class="button button-primary" id="practice-next">Berikutnya →</button>'}</div><p class="muted tiny">Jawaban tersimpan selama sesi latihan ini. Kamu dapat kembali dan mengubah pilihan.</p>`;
    workspace.querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{session.answers[q.id]=Number(btn.dataset.answer);renderQuestion();}));
    $('#practice-prev')?.addEventListener('click',()=>{session.index--;renderQuestion();}); $('#practice-next')?.addEventListener('click',()=>{session.index++;renderQuestion();});
    workspace.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>{session.index=Number(btn.dataset.jump);renderQuestion();}));
    $('#practice-submit')?.addEventListener('click',()=>finishPractice());
  }
  function finishPractice(){
    if(!confirm('Kumpulkan jawaban latihan sekarang?'))return;
    const correct=session.questions.filter(q=>session.answers[q.id]===q.answer).length, total=session.questions.length, score=Math.round(correct/total*100), resultData={date:new Date().toISOString(),correct,total,score,subject:$('#practice-subject').value==='all'?'Campuran':$('#practice-subject').value,kind:'Latihan'};
    SagaStore.savePractice(resultData); SagaStore.markActivity(); workspace.hidden=true; result.hidden=false;
    result.innerHTML=`<div class="result-hero"><div class="result-medal">${score>=80?'🏆':score>=60?'🌟':'🌱'}</div><span class="eyebrow">HASIL LATIHANMU</span><h2>${score>=80?'Luar biasa!':score>=60?'Terus bertumbuh!':'Tetap semangat!'}</h2><div class="score-number">${score}<small>/100</small></div><p>Kamu menjawab benar ${correct} dari ${total} soal.</p><div class="result-stats"><div><strong>${correct}</strong><span>Benar</span></div><div><strong>${total-correct}</strong><span>Belum tepat</span></div><div><strong>${total}</strong><span>Total soal</span></div></div></div><div class="review-header"><div><span class="eyebrow">EVALUASI</span><h3>Pembahasan soal</h3></div><button class="button button-outline" id="practice-again">Latihan lagi</button></div><div class="review-list">${session.questions.map((q,i)=>{const a=session.answers[q.id],ok=a===q.answer;return `<article class="review-item"><div class="review-question-head"><span class="review-number">${i+1}</span><span class="review-status ${ok?'correct':'wrong'}">${ok?'✓ Benar':'✕ Belum tepat'}</span></div><h4>${escapeHTML(q.q)}</h4><p class="your-answer">Jawabanmu: <strong>${a===undefined?'Belum dijawab':`${'ABCDE'[a]}. ${escapeHTML(q.options[a])}`}</strong></p><p>Jawaban benar: <strong>${'ABCDE'[q.answer]}. ${escapeHTML(q.options[q.answer])}</strong></p><div class="explanation"><b>Ulasan</b><p>${escapeHTML(q.explanation)}</p></div></article>`;}).join('')}</div>`;
    $('#practice-again').addEventListener('click',()=>{result.hidden=true;setup.hidden=false;setup.scrollIntoView({behavior:'smooth'});});
  }
})();
