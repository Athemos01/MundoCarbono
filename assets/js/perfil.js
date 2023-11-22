async function loggingout(){
    const user = Parse.User.current();
    if(user){
        await Parse.User.logOut();
        alert(`Conta saindo`);
    }
}
document.getElementById("btn-sair").addEventListener("click", async function () {
    loggingout();
});