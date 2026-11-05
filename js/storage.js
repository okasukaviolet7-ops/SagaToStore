/* Penyimpanan lokal terpusat. Data hanya berada di browser/perangkat ini. */
(function () {
  const PREFIX = 'sagatoedu:';
  const defaults = { profile: null, users: [], session: null, bookmarks: [], completed: [], practiceHistory: [], tryoutHistory: [], activeTryout: null, theme: 'light', activityDays: [] };
  function read(key) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw === null ? defaults[key] : JSON.parse(raw);
    } catch (error) {
      console.warn('SagaToEdu: data lokal tidak dapat dibaca:', key, error);
      return defaults[key];
    }
  }
  function write(key, value) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); return true; }
    catch (error) { console.error('SagaToEdu: gagal menyimpan data:', key, error); return false; }
  }
  function todayKey() {
    const d = new Date();
    return [d.getFullYear(), String(d.getMonth()+1).padStart(2,'0'), String(d.getDate()).padStart(2,'0')].join('-');
  }
  function markActivity() {
    const days = read('activityDays') || [];
    const today = todayKey();
    if (!days.includes(today)) days.push(today);
    write('activityDays', days.slice(-120));
  }
  const ST = {
    get: read, set: write,
    currentUser() { return read('session'); },
    profile() { return read('profile') || { name: 'Pelajar Saga', email: '', avatar: '🦉', joinedAt: new Date().toISOString() }; },
    isLoggedIn() { return Boolean(read('session')); },
    toggleBookmark(id) {
      const list = read('bookmarks') || [];
      const next = list.includes(id) ? list.filter(x => x !== id) : [...list, id];
      write('bookmarks', next); return next.includes(id);
    },
    isBookmarked(id) { return (read('bookmarks') || []).includes(id); },
    completeMaterial(id) {
      const list = read('completed') || [];
      if (!list.includes(id)) list.push(id);
      write('completed', list); markActivity();
    },
    savePractice(result) { const h = read('practiceHistory') || []; h.unshift(result); write('practiceHistory', h.slice(0,80)); markActivity(); },
    saveTryout(result) { const h = read('tryoutHistory') || []; h.unshift(result); write('tryoutHistory', h.slice(0,80)); write('activeTryout', null); markActivity(); },
    markActivity
  };
  window.SagaStore = ST;
})();
