document.getElementById('phone').addEventListener('input', function (e) {
  let v = e.target.value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);

  if (v.length >= 2) {
    v = '(' + v.slice(0, 2) + ') ' + v.slice(2);
  }
  if (v.length > 6 && v.length <= 10) {
    v = v.slice(0, 9) + '-' + v.slice(9);
  }
  if (v.length > 10) {
    v = v.slice(0, 10) + '-' + v.slice(10);
  }
  e.target.value = v;
});
