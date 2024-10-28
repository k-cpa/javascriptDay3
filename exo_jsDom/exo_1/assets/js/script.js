const userInput = document.getElementById('userInput')
const message = document.getElementById('message')
const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    const text = userInput.value;

    if (text === "Bonjour") {
        message.textContent = "Bonne journée !";
        message.style.color = "green"
    } else if (text === "Au revoir") {
        message.textContent = "A la prochaine";
        message.style.color = "green";
    } else {
        message.textContent = "Je ne comprends pas";
        message.style.color = "red";
    }
})