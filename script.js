const botaoMensagem = document.getElementById("botaoMensagem")
const mensagem = document.getElementById("mensagem")
const aprendizados = [
    {
        tema: 'HTML',
        pergunta: 'Qualé a diferença entre id e class?',
        resposta: 'O id identifica um único elemento. A class pode ser usada em vários elementos',
        entendimento: 'Entendi que o uso do id para algo específico e class para repetir estilos'
    },
    {
        tema: 'CSS',
        pergunta: 'Para que serve o display flex?',
        resposta: 'O display flex é utilizado para alinhar e organizar elementos de forma flexível na página.',
        entendimento: 'Entendi que o Flexbox facilita muito o alinhamento e posicionamento dos elementos.'
    },

    {
        tema: 'JavaScript',
        pergunta: 'Para que serve uma função?',
        resposta: 'Uma função é usada para executar uma ação específica no código.',
        entendimento: 'Entendi que funções ajudam a reutilizar código e organizar melhor o JavaScript.'
    }
]

function alterarTexto() {
    //mensagem.textContent = "Bem-vindo ao meu portfólio! Este projeto foi criado com HTML, CSS e JavaScript"
    alert("Bem-vindo ao meu portfólio! Este projeto foi criado com HTML, CSS e JavaScript")
}

function mostrarTecnologia(tecnologia) {
    const texto = document.getElementById("tecnologiaSelecionada");
    texto.textContent = "Você selecionou: " + tecnologia;
}

const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", trocarTema);

function trocarTema() {
    document.body.classList.toggle("tema-claro");
}

function renderizarAprendizados(lista) {
    const listaAprendizados = document.getElementById("listaAprendizados")
    const contadorAprendizados = document.getElementById("contadorAprendizados")

    if (!listaAprendizados || !contadorAprendizados) {
        return;
    }

    listaAprendizados.innerHTML = "";

    for (let cont = 0; cont < lista.length; cont++) {
        listaAprendizados.innerHTML += `
        <article class="aprendizado">
              <span>${lista[cont].tema}</span>
              <h3>${lista[cont].pergunta}</h3>
              <p><strong>Resposta:</strong> ${lista[cont].resposta}</p>
              <p><strong>O que entendi:</strong> ${lista[cont].entendimento}</p>
        </article>      `
    }

    contadorAprendizados.textContent = "Total de Aprendizados: " + lista.length
}

renderizarAprendizados(aprendizados)


function filtrarAprendizados(tema){
    if (tema == "Todos"){
        renderizarAprendizados(aprendizados)
        return
    }
    else{
        const filtrados = aprendizados.filter(function (item){
            return item.tema == tema;
        })

        renderizarAprendizados(filtrados);
    }
}

function mostrarOcultarAprendizados() {
    const listaAprendizados = document.getElementById("listaAprendizados")
    const botaoAprendizados = document.getElementById("botaoAprendizados")

    listaAprendizados.classList.toggle("oculto")

    if(listaAprendizados.classList.contains("oculto")){
        botaoAprendizados.textContent = "Mostrar Aprendizados"
    }
    else{
        botaoAprendizados.textContent = "Ocultar Aprendizados"
    }
}

function adicionarAprendizado(evento){
    evento.preventDefault()

    const campoTema = document.getElementById("tema")
    const campoPergunta = document.getElementById("pergunta")
    const campoResposta = document.getElementById("resposta")
    const campoEntendimento = document.getElementById("entendimento")

    if(
        campoTema.value == "" ||
        campoPergunta.value == "" ||
        campoResposta.value == "" ||
        campoEntendimento.value == "" 
     ) {
        alert("Preencha todos os campos antes de adicionar.")
        return false;
    }

    const novoAprendizado = {
        tema: campoTema.value,
        pergunta: campoPergunta.value,
        resposta: campoResposta.value,
        entendimento: campoEntendimento.value,
    }

    aprendizados.push(novoAprendizado)

    renderizarAprendizados(aprendizados)

    return false
}