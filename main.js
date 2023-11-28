document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Loaded');

    // FONCTION DES BOUTONS

    const selectedNumberSpan = document.getElementById('selectedNumber');
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');
    const btn4 = document.getElementById('btn-4');
    const btn5 = document.getElementById('btn-5');

    let selectedNumber = 0;  // Donner la valeur de 0 par défaut au compteur

    function updateSelectedNumber() {
        selectedNumberSpan.textContent = selectedNumber;
    };

    btn1.addEventListener('click', function () {
        selectedNumber = 1;
        updateSelectedNumber();
        localStorage.setItem("selectedNumber", selectedNumber);
    });


    // FONCTION SUBMIT QUI ENVOIE VERS THANK.HTML

    const btnSubmit = document.querySelector('.btn-submit');

    btnSubmit.addEventListener('click', function () {
        window.location.href = 'thank.html';
    });


});


