// Seleciona todos os botões com a classe 'read_button'
var buttons = document.querySelectorAll('.read_button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        
        var card = button.closest('.card');

       
        card.classList.toggle('active');

        
        if (card.classList.contains('active')) {
            button.textContent = 'Ler menos';
        } else {
            button.textContent = 'Ler mais';
        }
    });
});
