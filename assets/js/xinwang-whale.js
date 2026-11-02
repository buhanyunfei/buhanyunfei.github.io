(function () {
  'use strict';

  var canvas = document.getElementById('xwWhale');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 700) return;

  var ctx = canvas.getContext('2d');
  var whale = [
    '             __',
    '        ____/  \\__',
    '   ____/            \\___',
    '  /                       )',
    '  \\____       _________/',
    '       \\_____/',
    '          \\__'
  ];
  var bubbles = [];
  var width = 0;
  var height = 0;
  var x = -260;
  var last = 0;

  function resize() {
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(now) {
    var delta = Math.min(now - last, 48) || 16;
    last = now;
    x += delta * 0.022;
    if (x > width + 80) x = -260;

    ctx.clearRect(0, 0, width, height);
    ctx.font = '15px "Geist Mono", monospace';
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'rgba(28, 69, 112, .18)';
    var y = height * .67 + Math.sin(now * .00045) * 26;
    whale.forEach(function (line, index) {
      ctx.fillText(line, x, y + index * 16 + Math.sin(now * .001 + index) * 1.5);
    });

    if (Math.random() < .035) bubbles.push({ x: x + 275 + Math.random() * 12, y: y + 14, r: 1.5 + Math.random() * 3, life: 0 });
    bubbles = bubbles.filter(function (bubble) {
      bubble.life += delta;
      bubble.y -= delta * .025;
      bubble.x += Math.sin(bubble.life * .003) * .12;
      ctx.strokeStyle = 'rgba(85, 184, 198, ' + Math.max(0, .18 - bubble.life / 1800) + ')';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
      ctx.stroke();
      return bubble.life < 1800;
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  requestAnimationFrame(draw);
}());
