// Gallery lightbox: click an image to view it large; arrows/keys move between images in the same gallery.
document.addEventListener('click', function (e) {
  var link = e.target.closest('a.lightbox');
  if (!link) return;
  e.preventDefault();
  var links = Array.prototype.slice.call(link.closest('.gallery').querySelectorAll('a.lightbox'));
  var i = links.indexOf(link);
  var rtl = getComputedStyle(link).direction === 'rtl';

  var box = document.createElement('div');
  box.className = 'lightbox-view';
  box.setAttribute('role', 'dialog');
  box.dir = rtl ? 'rtl' : 'ltr';
  box.innerHTML = '<img alt=""><button class="lb-close" aria-label="סגירה">×</button>' +
    '<button class="lb-prev" aria-label="הקודם">' + (rtl ? '›' : '‹') + '</button>' +
    '<button class="lb-next" aria-label="הבא">' + (rtl ? '‹' : '›') + '</button>';
  var img = box.querySelector('img');
  function show(n) { i = (n + links.length) % links.length; img.src = links[i].href; img.alt = links[i].querySelector('img').alt; }
  function close() { box.remove(); document.removeEventListener('keydown', onKey); }
  function onKey(ev) {
    if (ev.key === 'Escape') close();
    if (ev.key === 'ArrowLeft') show(rtl ? i + 1 : i - 1);
    if (ev.key === 'ArrowRight') show(rtl ? i - 1 : i + 1);
  }
  box.addEventListener('click', function (ev) {
    if (ev.target.classList.contains('lb-prev')) show(i - 1);
    else if (ev.target.classList.contains('lb-next')) show(i + 1);
    else if (ev.target !== img) close();
  });
  document.addEventListener('keydown', onKey);
  show(i);
  document.body.appendChild(box);
});
