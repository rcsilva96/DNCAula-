function maiorIdade(){
    idade = 19
    window.location.href="paginaprincipal.html?idade="+idade
}

function menorIdade(){
    idade = 15
    window.location.href="paginaprincipal.html?idade="+idade
}

function carregaPagina(){

    const url = new URLSearchParams(window.location.search)

    let idade = url.get("idade")

    if (idade >= 18){
        document.getElementById("meuSite").innerHTML = "<p>Olá! Gostaria de te dar boas vindas a Cervejaria do Pericles. </p> <p> Aqui você encontrará as melhores bebidas do Brasil!</p>"
    } else {
        document.getElementById("meuSite").innerHTML = "<p>Você não pode usar esse site!</p>"
    }

}