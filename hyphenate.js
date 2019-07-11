var tag = document.getElementById('hyphenate');
console.log(tag);
var pattern = '<div></div>';

var patterns = [
    `<script src="https://desertfoxbg.github.io/patterns/bg.js"></script>`,
    `<script src="https://desertfoxbg.github.io/patterns/en-gb.js"></script>`,
    `<script src="https://desertfoxbg.github.io/patterns/de.js"></script>`,
    `<script src="https://desertfoxbg.github.io/patterns/it.js"></script>`,
    `<script src="https://desertfoxbg.github.io/patterns/fr.js"></script>`,
    `<script src="https://desertfoxbg.github.io/patterns/ru.js"></script>`
];

if(!tag) {
    console.log('no hyphenation');
}
else {
    var lang = tag.getAttribute('lang');
    console.log(lang);

    if(lang == 'en') {
        var hyphenate = createHyphenator(hyphenationPatternsEnGb);
        pattern = patterns.includes('/en-gb.js');
    }
    else if(lang == 'bg') {
        var hyphenate = createHyphenator(hyphenationPatternsBg);
        pattern = patterns.find(p => p.includes('/bg.js'));
    }
    else if(lang == 'de') {
        var hyphenate = createHyphenator(hyphenationPatternsDe);
        pattern = patterns.includes('/de.js');
    }
    else if(lang == 'fr') {
        var hyphenate = createHyphenator(hyphenationPatternsFr);
        pattern = patterns.find(p => p.includes('/fr.js'));
    }
    else if(lang == 'it') {
        var hyphenate = createHyphenator(hyphenationPatternsIt);
        pattern = patterns.find(p => p.includes('/it.js'));
    }
    else if(lang == 'ru') {
        var hyphenate = createHyphenator(hyphenationPatternsRu);
        pattern = patterns.find(p => p.includes('/ru.js'));
    }
}
console.log(pattern);

console.log(hyphenate);
Array.prototype.slice.call(document.getElementsByTagName('p'))
    .forEach(function (el) {
        el.innerHTML = hyphenate(el.innerHTML);
    });