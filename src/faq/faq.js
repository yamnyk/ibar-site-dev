function toogle(e) {
    var elems = document.getElementsByClassName('faq-header-title');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].childNodes[3].style.display = 'none';
    }
    e.childNodes[3].style.display = 'block';
}