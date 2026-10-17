
const dataInicioNamoro = new Date(2026, 9, 16);

// ===============================
// CONTADOR DE DIAS
// ===============================

function atualizarContador() {
    const elementoDias = document.getElementById("dias");

    if (!elementoDias) return;

    const hoje = new Date();
    const inicio = new Date(dataInicioNamoro);

    hoje.setHours(0, 0, 0, 0);
    inicio.setHours(0, 0, 0, 0);

    const diferenca = Math.floor(
        (hoje - inicio) / (1000 * 60 * 60 * 24)
    );

    elementoDias.textContent = Math.max(0, diferenca);
}

atualizarContador();

// ===============================
// ESTRELAS DO FUNDO
// ===============================

const ceuEstrelado = document.getElementById("ceuEstrelado");

if (ceuEstrelado) {
    for (let i = 0; i < 75; i++) {
        const estrela = document.createElement("span");

        estrela.className = "estrela";
        estrela.style.left = Math.random() * 100 + "%";
        estrela.style.top = Math.random() * 100 + "%";
        estrela.style.setProperty(
            "--duracao",
            1.5 + Math.random() * 4 + "s"
        );

        ceuEstrelado.appendChild(estrela);
    }
}

// ===============================
// CARTA SECRETA
// ===============================

const botaoCarta = document.getElementById("botaoCarta");
const conteudoCarta = document.getElementById("conteudoCarta");

if (botaoCarta && conteudoCarta) {
    botaoCarta.addEventListener("click", function () {
        const estaAberta = !conteudoCarta.hidden;

        conteudoCarta.hidden = estaAberta;
        botaoCarta.textContent = estaAberta
            ? "Abrir nossa cartinha ♥"
            : "Fechar nossa cartinha ♥";

        if (!estaAberta) {
            conteudoCarta.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}

// Revela os trechos da carta conforme a pessoa rola a página.

const trechosCarta = document.querySelectorAll(".trecho-carta");

if (trechosCarta.length > 0) {
    const observadorCarta = new IntersectionObserver(
        function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("revelado");
                }
            });
        },
        { threshold: 0.2 }
    );

    trechosCarta.forEach(function (trecho) {
        observadorCarta.observe(trecho);
    });
}

// ===============================
// POTE DE MENSAGENS
// ===============================

const mensagensPote = [
    "Você é uma das partes mais bonitas da minha vida. ♥",
    "Que a gente nunca perca a vontade de fazer o outro sorrir.",
    "Gosto da paz que sinto quando estou com você.",
    "Que nossa história seja construída com carinho, respeito e sinceridade.",
    "Se pudesse guardar um momento em um potinho, guardaria um dos nossos.",
    "Você deixa meus dias mais especiais sem nem perceber. ♥",
    "Que a gente continue descobrindo coisas bonitas um no outro.",
    "Não precisamos de uma história perfeita, só de uma história verdadeira.",
    "Espero que você sempre se sinta querida e importante ao meu lado.",
    "Meu desejo é que nunca faltem motivos para a gente sorrir juntos."
];

const botaoPote = document.getElementById("botaoPote");
const mensagemPote = document.getElementById("mensagemPote");

let ultimaMensagemPote = -1;

if (botaoPote && mensagemPote) {
    botaoPote.addEventListener("click", function () {
        let indice;

        do {
            indice = Math.floor(Math.random() * mensagensPote.length);
        } while (
            mensagensPote.length > 1 &&
            indice === ultimaMensagemPote
        );

        ultimaMensagemPote = indice;
        mensagemPote.textContent = mensagensPote[indice];
        mensagemPote.classList.add("visivel");

        mensagemPote.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
}

// ===============================
// QUANDO SENTIR SAUDADE
// ===============================

const mensagensSaudade = [
    "Respira fundo e lembra que você é muito especial. ♥",
    "Mesmo quando a gente não está junto, você continua tendo um lugar especial na minha vida.",
    "Tomara que seu dia fique um pouquinho melhor depois de ler isso.",
    "Lembra de um momento nosso que fez você sorrir. Quero que a gente tenha muitos outros.",
    "Não precisa ser um dia perfeito para existir um motivo para sorrir.",
    "Que você nunca duvide do carinho que existe nesta história. ♥",
    "Se hoje estiver difícil, vá com calma. Um passo de cada vez.",
    "Nosso universo tem várias estrelas. Esta aqui é só um lembrete de carinho.",
    "Guarda um sorriso para quando a gente se encontrar de novo.",
    "Às vezes, uma mensagem pequena pode carregar um carinho enorme."
];

const botaoSaudade = document.getElementById("botaoSaudade");
const mensagemSaudade = document.getElementById("mensagemSaudade");
const textoSaudade = document.getElementById("textoSaudade");

let ultimaMensagemSaudade = -1;

if (botaoSaudade && mensagemSaudade && textoSaudade) {
    botaoSaudade.addEventListener("click", function () {
        let indice;

        do {
            indice = Math.floor(Math.random() * mensagensSaudade.length);
        } while (
            mensagensSaudade.length > 1 &&
            indice === ultimaMensagemSaudade
        );

        ultimaMensagemSaudade = indice;
        textoSaudade.textContent = mensagensSaudade[indice];
        mensagemSaudade.hidden = false;
        mensagemSaudade.classList.add("visivel");
    });
}

// ===============================
// NOSSA CONSTELAÇÃO
// ===============================

const areaConstelacao = document.getElementById("areaConstelacao");
const mensagemConstelacao = document.getElementById("mensagemConstelacao");
const textoConstelacao = document.getElementById("textoConstelacao");

const estrelasConstelacao = [
    {
        x: 12,
        y: 28,
        mensagem: "Você é uma das coincidências mais bonitas que a vida colocou no meu caminho. ♥"
    },
    {
        x: 30,
        y: 15,
        mensagem: "Se eu pudesse escolher um lugar para olhar as estrelas, seria ao seu lado."
    },
    {
        x: 47,
        y: 35,
        mensagem: "Cada estrela guarda uma história. Eu espero que a gente tenha muitas para contar."
    },
    {
        x: 65,
        y: 17,
        mensagem: "Você faz parte do meu universo de um jeito que palavras nem sempre conseguem explicar. ♥"
    },
    {
        x: 84,
        y: 32,
        mensagem: "Que nunca faltem carinho, respeito e motivos para sorrirmos juntos."
    },
    {
        x: 72,
        y: 65,
        mensagem: "Nossa história começou em 16 de outubro de 2026. Que venham muitos capítulos bonitos."
    },
    {
        x: 45,
        y: 78,
        mensagem: "Mesmo em noites diferentes, duas pessoas podem olhar para o mesmo céu."
    },
    {
        x: 20,
        y: 65,
        mensagem: "Entre tantas estrelas, esta mensagem encontrou você. Guarde-a com carinho. ♥"
    }
];

if (areaConstelacao && mensagemConstelacao && textoConstelacao) {
    const linhasConstelacao = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 0],
        [2, 6]
    ];

    function desenharLinhasConstelacao() {
        areaConstelacao
            .querySelectorAll(".linha-constelacao")
            .forEach(function (linha) {
                linha.remove();
            });

        const largura = areaConstelacao.clientWidth;
        const altura = areaConstelacao.clientHeight;

        linhasConstelacao.forEach(function (ligacao) {
            const estrelaA = estrelasConstelacao[ligacao[0]];
            const estrelaB = estrelasConstelacao[ligacao[1]];

            const x1 = largura * estrelaA.x / 100;
            const y1 = altura * estrelaA.y / 100;
            const x2 = largura * estrelaB.x / 100;
            const y2 = altura * estrelaB.y / 100;

            const distancia = Math.sqrt(
                Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
            );

            const angulo = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

            const linha = document.createElement("span");
            linha.className = "linha-constelacao";
            linha.style.left = x1 + "px";
            linha.style.top = y1 + "px";
            linha.style.width = distancia + "px";
            linha.style.transform = "rotate(" + angulo + "deg)";

            areaConstelacao.appendChild(linha);
        });
    }

    estrelasConstelacao.forEach(function (estrela, indice) {
        const botaoEstrela = document.createElement("button");

        botaoEstrela.type = "button";
        botaoEstrela.className = "estrela-interativa";
        botaoEstrela.textContent = "✦";
        botaoEstrela.setAttribute(
            "aria-label",
            "Revelar mensagem da estrela " + (indice + 1)
        );

        botaoEstrela.style.left = estrela.x + "%";
        botaoEstrela.style.top = estrela.y + "%";
        botaoEstrela.style.transform = "translate(-50%, -50%)";

        botaoEstrela.addEventListener("click", function () {
            textoConstelacao.textContent = estrela.mensagem;
            mensagemConstelacao.hidden = false;
            mensagemConstelacao.classList.add("visivel");

            areaConstelacao
                .querySelectorAll(".estrela-interativa")
                .forEach(function (outraEstrela) {
                    outraEstrela.classList.remove("estrela-escolhida");
                });

            botaoEstrela.classList.add("estrela-escolhida");

            mensagemConstelacao.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        });

        areaConstelacao.appendChild(botaoEstrela);
    });

    desenharLinhasConstelacao();

    window.addEventListener("resize", desenharLinhasConstelacao);
            }
