const preencheZero = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const now = new Date();
    const dia = new Date(2021, 10, 26, 0, 0, 0);
    const diferenca = dia.getTime() - now.getTime();
    const divDias = 24 * 60 * 60 * 1000;
    const divHoras = 60 * 60 * 1000;
    const divMinutos = 60 * 1000;
    const dias = diferenca / divDias;
    const horas = (diferenca % divDias) / divHoras;
    const minutos = ((diferenca % divDias) % divHoras) / divMinutos;
    const segundos = (((diferenca % divDias) % divHoras) % divMinutos) / 1000;
    document.getElementById("dia").innerHTML = "<h2>" + Math.trunc(dias) + "</h2><p>dias</p>";
    document.getElementById("hora").innerHTML = "<h2>" + preencheZero(Math.trunc(horas)) + "</h2><p>horas</p>";
    document.getElementById("minuto").innerHTML = "<h2>" + preencheZero(Math.trunc(minutos)) + "</h2><p>minutos</p>";
    document.getElementById("segundo").innerHTML = "<h2>" + preencheZero(Math.trunc(segundos)) + "</h2><p>segundos</p>";
}, 1000);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = {
        nome,
        email
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem("dadosCliente", convertData);

    let conteudo = document.getElementById("content");
    let conteudoBpk = conteudo.innerHTML;
    let carregando = "<h1>Carregando...</h1>";
    let pronto = "<h1>Pronto! Seu e-mail foi cadastrado!</h1>";
    conteudo.innerHTML = carregando;
    setTimeout(() => {
        conteudo.innerHTML = pronto;
    }, 2000);
    setTimeout(() => {
        conteudo.innerHTML = conteudoBpk;
    }, 3000);
})