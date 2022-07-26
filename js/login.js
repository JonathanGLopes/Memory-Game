const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");

const validateInput = ({ target }) => {
    if(target.value.length > 2){
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value); // 2 parâmetros são passados para o método setItem, o primeiro é a chave do valor que será salvo, que nesse caso é o player. E o valor dela é oque será inserido no input, no caso o input.value
    window.location = 'pages/game.html';
}

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);