/* Perilaku navigasi tambahan dan shortcut pencarian global. */
(function () {
  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase()==='k') {
      event.preventDefault(); window.location.href='materi.html?focus=search';
    }
  });
  document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>{window.location.href=button.dataset.go;}));
})();
