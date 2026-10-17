
const dataInicioNamoro = new Date(2026, 9, 16);

function atualizarContador() {
    const elementoDias = document.getElementById("dias");
    const elementoData = document.getElementById("dataInicio");

    if (!elementoDias) return;

    const agora = new Date();

    const hoje = new Date(
        agora.getFullYear(),
        agora.getMonth(),
        agora.getDate()
    );

    const inicio = new Date(
        dataInicioNamoro.getFullYear(),
        dataInicioNamoro.getMonth(),
        dataInicioNamoro.getDate()
    );

    const diferenca = Math.floor(
        (hoje - inicio) / (1000 * 60 * 60 * 24)
    );

    if (diferenca < 0) {
        elementoDias.textContent = "0";

        if (elementoData) {
            elementoData.textContent =
                "Nossa contagem começa em 16/10/2026 ♥";
        }
        return;
    }

    elementoDias.textContent = diferenca;

    if (elementoData) {
        elementoData.textContent =
            diferenca === 0
                ? "Hoje começa a nossa contagem ♥"
                : "Desde 16/10/2026, construindo nossa história ♥";
    }
}

atualizarContador();
setInterval(atualizarContador, 60000);


// CÉU ESTRELADO
const ceu = document.getElementById("ceuEstrelado");

if (ceu) {
    for (let i = 0; i < 75; i++) {
        const estrela = document.createElement("span");
        estrela.className = "estrela";

        const tamanho = Math.random() * 2.5 + 1;

        estrela.style.width = tamanho + "px";
        estrela.style.height = tamanho + "px";
        estrela.style.left = Math.random() * 100 + "%";
        estrela.style.top = Math.random() * 100 + "%";
        estrela.style.setProperty(
            "--duracao",
            (Math.random() * 3 + 2) + "s"
        );
        estrela.style.animationDelay = Math.random() * 4 + "s";

        ceu.appendChild(estrela);
    }
}


// ABRIR E FECHAR A CARTA
const botaoCarta = document.getElementById("botaoCarta");
const conteudoCarta = document.getElementById("conteudoCarta");

if (botaoCarta && conteudoCarta) {
    botaoCarta.addEventListener("click", () => {
        const estaAberta = !conteudoCarta.hidden;

        conteudoCarta.hidden = estaAberta;
        botaoCarta.setAttribute("aria-expanded", String(!estaAberta));

        document.getElementById("textoEnvelope").textContent =
            estaAberta ? "Abrir minha carta" : "Fechar minha carta";

        if (!estaAberta) {
            setTimeout(revelarTrechosVisiveis, 100);
            setTimeout(() => {
                conteudoCarta.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 150);
        }
    });
}


// REVELAR A CARTA CONFORME A PESSOA DESCE A PÁGINA
function revelarTrechosVisiveis() {
    const trechos = document.querySelectorAll(".trecho-carta");

    trechos.forEach((trecho) => {
        const posicao = trecho.getBoundingClientRect();

        if (
            posicao.top < window.innerHeight * 0.9 &&
            posicao.bottom > 0
        ) {
            trecho.classList.add("revelado");
        }
    });
}

window.addEventListener("scroll", revelarTrechosVisiveis);
window.addEventListener("resize", revelarTrechosVisiveis);


// POTE DE MENSAGENS
const mensagens = [
    "Você tornou meu mundo mais especial. ♥",
    "Que nunca faltem motivos para a gente sorrir juntos.",
    "Eu quero continuar conhecendo cada detalhe de você.",
    "Que a gente sempre encontre tempo para conversar.",
    "Você faz parte de um capítulo muito importante da minha vida.",
    "Que a gente nunca perca a vontade de cuidar um do outro.",
    "Ainda temos muitas lembranças bonitas para construir.",
    "Até os momentos simples ficam especiais quando compartilhados.",
    "Que sempre exista respeito, carinho e sinceridade entre nós.",
    "Este é só o começo da nossa história. ♥",
    "Obrigado por fazer parte da minha vida.",
    "Espero que você nunca esqueça o quanto é especial para mim."
];

let ultimaMensagem = -1;
let quantidadeBilhetes = 0;

const botaoPote = document.getElementById("botaoPote");
const bilhete = document.getElementById("bilhete");
const mensagemPote = document.getElementById("mensagemPote");
const numeroBilhete = document.getElementById("numeroBilhete");

if (botaoPote && bilhete && mensagemPote) {
    botaoPote.addEventListener("click", () => {
        let indice;

        if (mensagens.length === 1) {
            indice = 0;
        } else {
            do {
                indice = Math.floor(Math.random() * mensagens.length);
            } while (indice === ultimaMensagem);
        }

        ultimaMensagem = indice;
        quantidadeBilhetes++;

        bilhete.classList.remove("visivel");
        mensagemPote.textContent = mensagens[indice];

        if (numeroBilhete) {
            numeroBilhete.textContent =
                "Bilhetinho número " + quantidadeBilhetes + " ♥";
        }

        requestAnimationFrame(() => {
            bilhete.classList.add("visivel");
        });
    });
}
