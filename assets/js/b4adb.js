// Create a new User
async function createParseUser() {
    // Creates a new Parse "User" object, which is created by default in your Parse app
    let user = new Parse.User();
    // Set the input values to the new "User" object
    user.set("username", document.getElementById("username").value);
    user.set("email", document.getElementById("email").value);
    user.set("password", document.getElementById("password").value);
    try {
        // Call the save method, which returns the saved object if successful
        user = await user.save();
        if (user !== null) {
            // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
            alert(
                `Cadastro feito com sucesso!! Bem vindo ${user.get("username")}`
            );
            window.location.href = 'login.html';
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
// Add on click listener to call the create parse user function
document.getElementById("createButton").addEventListener("click", async function () {
    createParseUser();
});
async function queryParseUser() {
    const usernameInput = document.getElementById("user").value;
    const passwordInput = document.getElementById("password").value;
    try {
        let user = await Parse.User.logIn(usernameInput, passwordInput);

        alert(`Login feito`);
        alert(`login feito`);

    } catch (error) {
        console.error('Erro ao consultar Parse: ', error);
    }
}
document.getElementById("queryButton").addEventListener("click", async function () {
    queryParseUser();
});