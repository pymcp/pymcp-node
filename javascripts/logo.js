function animatePath(path, delay) {
  var drawTime = 1.5;
  var length = path.getTotalLength();
  path.style.transition = '';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = 'stroke-dashoffset ' + drawTime + 's ease-in-out';
  function start() {
    path.style.visibility = 'visible';
    path.style.strokeDashoffset = '0';
  }
  if (delay) {
    setTimeout(start, delay * drawTime * 1000);
  } else {
    start();
  }
};
$(document).ready(function() {
  $('#logo g.draw path').each(function(i){animatePath(this, i + 1)});
});

