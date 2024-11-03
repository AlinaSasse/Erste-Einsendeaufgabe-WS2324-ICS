var bildershow = ["IMG_20231028_185153.png", "12.jpg", "13.jpg"];
var nextPicture = 0;
var zeit = 2000;

function animation() {
    document.getElementById('HN').src = bildershow[nextPicture];
    nextPicture++;

    if (nextPicture === bildershow.length) {
        nextPicture = 0;
    }

    setTimeout(animation, zeit);
}

document.addEventListener('DOMContentLoaded', function () {
    var anzeigenLink = document.getElementById('anzeigenLink');
    var kommentarForm = document.getElementById('kommentarForm');

    anzeigenLink.addEventListener('click', function () {
        kommentarForm.style.display = (kommentarForm.style.display === 'none') ? 'block' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var textfeld = document.getElementById('info');
    var zeichenzaehler = document.getElementById('zeichenzaehler');
    var maxZeichen = 500; // Die maximale Anzahl der Zeichen

    textfeld.addEventListener('input', function () {
        var verbleibendeZeichen = maxZeichen - textfeld.value.length;

        zeichenzaehler.textContent = 'Verbleibende Zeichen: ' + verbleibendeZeichen;
    });
});