const step0 = document.getElementById('m-step0')
const step1 = document.getElementById(`m-step1`);
const step2 = document.getElementById(`m-step2`);

async function loggingout() {
    const user = Parse.User.current();
    if (user) {
        await Parse.User.logOut();
        alert(`Conta saindo`);
        window.location.href = 'index.html';
    }
}
document.getElementById("btn-sair").addEventListener("click", async function () {
    loggingout();
});

function mainpag() {
    step0.style.display = 'block';
    step1.style.display = 'none';
    step2.style.display = 'none';
}
function combtn() {
    step0.style.display = 'none';
    step1.style.display = 'block';
    step2.style.display = 'none';
}
function elecbtn() {
    step0.style.display = 'none';
    step1.style.display = 'none';
    step2.style.display = 'block';
}
