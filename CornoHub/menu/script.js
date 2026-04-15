function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let emailvalido = email.includes("@")
    && email.includes(".com") && email.includes("gmail");

    if(email === "" || senha === "") {
        alert("prencha todos os dados gatão!");
    }
    else if(!emailvalido) {
        alert("email invalido meu bem, tente novamente");
    }
    else {
        window.location.href = "PaginaInicial/inicial.html";
    }
}