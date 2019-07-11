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

if (!tag) {
    console.log('no hyphenation');
}
else {
    var lang = tag.getAttribute('lang');
    console.log(lang);

    if (lang == 'en') {
        pattern = patterns.includes('/en-gb.js');
        console.log(pattern);
        document.body.innerHTML += pattern;
        var hyphenate = createHyphenator(hyphenationPatternsEnGb);
    }
    else if (lang == 'bg') {
        pattern = patterns.find(p => p.includes('/bg.js'));
        console.log(pattern);
        document.head.innerHTML += pattern;
        var hyphenate = createHyphenator(hyphenationPatternsBg);
    }
    else if (lang == 'de') {
        pattern = patterns.includes('/de.js');
        console.log(pattern);
        document.body.innerHTML += pattern;
        var hyphenate = createHyphenator(hyphenationPatternsDe);
    }
    else if (lang == 'fr') {
        pattern = patterns.find(p => p.includes('/fr.js'));
        console.log(pattern);
        document.body.innerHTML += pattern;
        var hyphenate = createHyphenator(hyphenationPatternsFr);
    }
    else if (lang == 'it') {
        pattern = patterns.find(p => p.includes('/it.js'));
        console.log(pattern);
        document.body.innerHTML += pattern;
        var hyphenate = createHyphenator(hyphenationPatternsIt);
    }
    else if (lang == 'ru') {
        pattern = patterns.find(p => p.includes('/ru.js'));
        console.log(pattern);
        document.body.innerHTML += pattern;
        var hyphenate = createHyphenator(hyphenationPatternsRu);
    }
}

console.log(hyphenate);
Array.prototype.slice.call(document.getElementsByTagName('p'))
    .forEach(function (el) {
        el.innerHTML = hyphenate(el.innerHTML);
    });