let currentStep = 1;
let totalStep = 4;
let estados = "";
function nextStep() {
    const currentQuestion = document.getElementById(`step${currentStep}`);//Pegar as etapas
    const getestados = document.getElementById('dropdown-estado')// pegar os estados
    currentQuestion.style.display = 'none';
    if (estados!= "ini"){
        estados = getestados;
    }
    if (currentStep < totalStep) {
        currentStep++;
    }
    const nextQuestion = document.getElementById(`step${currentStep}`);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    }
}
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