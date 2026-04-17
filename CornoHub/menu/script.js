function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let idade = Number(document.getElementById("idade").value)

    let emailvalido = email.includes("@")
    && email.includes(".com") && email.includes("gmail");

    if(email === "" || senha === "") {
        alert("prencha todos os dados gatão!");
    }
    else if(!emailvalido) {
        alert("email invalido meu bem, tente novamente");
    }
    else if(idade<18){
        alert("você é de menor safado")
    }
    else {
        window.location.href = "PaginaInicial/inicial.html";
   } 
}