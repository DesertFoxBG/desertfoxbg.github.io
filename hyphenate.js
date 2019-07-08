var tag = document.getElementById('hyphenate');
console.log(tag);
if(!tag) {
    console.log('no hyphenation');
}
else {
    var lang = tag.getAttribute('lang');
    console.log(lang);

    if(lang == 'en') {
        var hyphenate = createHyphenator(hyphenationPatternsEnGb);
    }
    else if(lang == 'bg') {
        var hyphenate = createHyphenator(hyphenationPatternsBg);
    }
    else if(lang == 'de') {
        var hyphenate = createHyphenator(hyphenationPatternsDe);
    }
}

console.log(hyphenate);
Array.prototype.slice.call(document.getElementsByTagName('p'))
    .forEach(function (el) {
        el.innerHTML = hyphenate(el.innerHTML);
    });