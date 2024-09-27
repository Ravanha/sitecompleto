function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked){
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function submitQuiz(){

    let correctAnswers = {
        q1: "C",
        q2: "D",
        q3: "C",
        q4: "A",
        q5: "B",
        q6: "A",
        q7: "A",
        q8: "C",
        q9: "A",
        q10: "A",

        //Adicione as respostas corretas para as outras perguntas
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswers = form.elements[key].value;
        if (userAnswers === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);

    // Tocar som se todas as respostas estiverem corretas
    if (score === 10){
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }
    if (score != 10){
        let errouQuiz = document.getElementById('perdeusom');
        errouQuiz.play();
    }
}

 function responderNovamente(){
     score = 0;
     document.getElementById('reiniciar').setAttribute('disabled', true);
     document.getElementById('enviar').removeAttribute('disabled');
     result.innerHTML = " ";
     document.getElementById('quiz-form').reset();
     let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
 }