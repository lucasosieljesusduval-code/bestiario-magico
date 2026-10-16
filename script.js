console.log("JavaScript carregado!");
const criaturas = [
    {
        imagem: "imagens/Coelho-Voador.avif",
        nome: "Coelho Voador",
        descricao: "Pequeno mamífero com enormes orelhas que vive entre as árvores.",
        pagina: "Coelho-Voador.html."
    },
    {
        imagem: "imagens/Guardião de Madeira Sob a Lua Cheia.png",
        nome: "Urso-Cipó",
        descricao: "Protetor das florestas, conhecido por sua força e sabedoria.",
        pagina: "Urso-Cipo.html."
    },
    {
        imagem: "imagens/Peixe Anfíbio na Margem do Lago.png",
        nome: "Peixe Terrestre",
        descricao: "Um tipo raro de peixe que vive em ambientes terrestres.",
        pagina: "Peixe-Terrestre.html."
    }
];

let indiceAtual = 0;

const imagemCriatura = document.querySelector("#Carrossel img");
    const botaoAnterior = document.getElementById("botao-esquerdo");
    const botaoProximo = document.getElementById("botao-direito");
    const nomeCriatura = document.getElementById("nome-criatura");
    const descricaoCriatura = document.getElementById("descricao-criatura");
    const linkCriatura = document.getElementById("link-criatura");

function atualizarCarrossel() {
    imagemCriatura.src = criaturas[indiceAtual].imagem;
    imagemCriatura.alt = criaturas[indiceAtual].nome;
    nomeCriatura.textContent = criaturas[indiceAtual].nome;
    descricaoCriatura.textContent = criaturas[indiceAtual].descricao;
    linkCriatura.href = criaturas[indiceAtual].pagina;
    console.log("Atualizando link para: " + criaturas[indiceAtual].pagina);
    } 

    botaoProximo.addEventListener("click", function() {
    indiceAtual = (indiceAtual + 1) ;
   
    if (indiceAtual >= criaturas.length) {
        indiceAtual = 0;
    }

    atualizarCarrossel();
    });

    botaoAnterior.addEventListener("click", function() {
    indiceAtual = (indiceAtual - 1) ;
   
    if (indiceAtual < 0) {
        indiceAtual = criaturas.length - 1;
    }

    atualizarCarrossel();
    });