var btn = document.getElementById('btn');
window.onscroll = function() {
  var height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

function toTop() {
  var height = document.documentElement.scrollTop || document.body.scrollTop;
  var t = setInterval(function() {
    height -= 10;
    if (height > 0) {
      window.scrollTo(0, height);
    } else {
      window.scrollTo(0, 0);
      clearInterval(t);
    }
  }, 1);
}