function changeBgColor(p) {
    p.style.background = 'blue';
}
var ps = document.querySelectorAll('p');
ps.forEach(function (el) {
    el.onclick = function () { return changeBgColor(el); };
});
