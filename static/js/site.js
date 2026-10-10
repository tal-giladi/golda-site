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

// Fade images in as they scroll into view.
(function () {
  var items = document.querySelectorAll('.fade');
  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(function (el) { io.observe(el); });
})();

// Scrolling row: arrow buttons move by most of a screen width.
document.querySelectorAll('.gallery-strip').forEach(function (strip) {
  var track = strip.querySelector('.gallery-track');
  var rtl = getComputedStyle(track).direction === 'rtl';
  function move(dir) { track.scrollBy({ left: dir * track.clientWidth * 0.8 * (rtl ? -1 : 1), behavior: 'smooth' }); }
  strip.querySelector('.strip-prev').addEventListener('click', function () { move(-1); });
  strip.querySelector('.strip-next').addEventListener('click', function () { move(1); });
});

// Welcome popup on the home page, once per visit.
(function () {
  var pop = document.getElementById('welcome-popup');
  if (!pop) return;
  try { if (sessionStorage.getItem('popupSeen')) return; } catch (e) {}
  function close() {
    pop.classList.remove('open');
    setTimeout(function () { pop.hidden = true; }, 400);
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) { if (e.key === 'Escape') close(); }
  pop.addEventListener('click', function (e) {
    if (e.target === pop || e.target.classList.contains('popup-close')) close();
  });
  setTimeout(function () {
    pop.hidden = false;
    requestAnimationFrame(function () { pop.classList.add('open'); });
    document.addEventListener('keydown', onKey);
    try { sessionStorage.setItem('popupSeen', '1'); } catch (e) {}
  }, 1200);
})();
