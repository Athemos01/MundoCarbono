let currentStep = 1;
let totalStep = 4;

//próximo estagio
function nextStep() {
    const currentQuestion = document.getElementById(`step${currentStep}`);//Pegar as etapas
    currentQuestion.style.display = 'none';
    if (currentStep < totalStep) {
        currentStep++;
    }
    const nextQuestion = document.getElementById(`step${currentStep}`);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    }
}
//estagio anterior
function backStep() {
    const currentQuestion = document.getElementById(`step${currentStep}`);
    currentQuestion.style.display = 'none';
    if (currentQuestion => 1) {
        currentStep--;
    }

    const backQuestion = document.getElementById(`step${currentStep}`);
    if (backQuestion) {
        backQuestion.style.display = 'block';
    }
}
function validarNumero(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}
