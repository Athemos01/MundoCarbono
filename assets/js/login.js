async function queryParseUser() {
    const usernameInput = document.getElementById("user").value;
    const passwordInput = document.getElementById("password").value;
    try {
        let user = await Parse.User.logIn(usernameInput, passwordInput);
        alert(`Login feito`);
        window.location.href = 'perfil.html';

    } catch (error) {
        alert(`Error: ${error.message}`);
        console.error('Erro ao consultar Parse: ', error);
    }
}
document.getElementById("queryButton").addEventListener("click", async function () {
    queryParseUser();
});