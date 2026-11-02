(function () {
  'use strict';

  var page = document.querySelector('.xinwang-page');
  if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var frame;
  document.addEventListener('pointermove', function (event) {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(function () {
      page.style.setProperty('--xw-mx', event.clientX + 'px');
      page.style.setProperty('--xw-my', event.clientY + 'px');
    });
  }, { passive: true });
}());
