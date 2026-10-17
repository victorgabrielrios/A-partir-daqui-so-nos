
const dataInicioNamoro = new Date(2026, 9, 16);

// =====================================
// CONTADOR DE DIAS
// =====================================

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

// =====================================
// INICIALIZAÇÃO DO SITE
// =====================================

function iniciarSite() {
    atualizarContador();

    // Estrelas do fundo
    const ceuEstrelado = document.getElementById("ceuEstrelado");

    if (ceuEstrelado && !ceuEstrelado.dataset.criado) {
        ceuEstrelado.dataset.criado = "sim";

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

    iniciarCarta();
    iniciarPote();
    iniciarSaudade();
    iniciarConstelacao();
}

// =====================================
// CARTA SECRETA
// =====================================

function iniciarCarta() {
    const botao = document.getElementById("botaoCarta");
    const conteudo = document.getElementById("conteudoCarta");

    if (!botao || !conteudo || botao.dataset.ativo) return;
    botao.dataset.ativo = "sim";

    botao.addEventListener("click", function () {
        const abrir = conteudo.hidden;

        conteudo.hidden = !abrir;
        botao.textContent = abrir
            ? "Fechar nossa cartinha ♥"
            : "Abrir nossa cartinha ♥";

        if (abrir) {
            conteudo.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });

    const trechos = document.querySelectorAll(".trecho-carta");

    if ("IntersectionObserver" in window && trechos.length) {
        const observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("revelado");
                }
            });
        }, { threshold: 0.2 });

        trechos.forEach(function (trecho) {
            observador.observe(trecho);
        });
    }
}

// =====================================
// POTE DE MENSAGENS — CORRIGIDO
// =====================================

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

let ultimaMensagemPote = -1;

function iniciarPote() {
    const botao =
        document.getElementById("botaoPote") ||
        document.querySelector(".pote-botao");

    const mensagem =
        document.getElementById("mensagemPote") ||
        document.querySelector("#pote .bilhete") ||
        document.querySelector(".bilhete");

    if (!botao || !mensagem || botao.dataset.poteAtivo) {
        if (!botao || !mensagem) {
            console.error(
                "Pote: confira os elementos do pote no index.html."
            );
        }
        return;
    }

    botao.dataset.poteAtivo = "sim";

    botao.addEventListener("click", function (evento) {
        evento.preventDefault();

        let indice;

        do {
            indice = Math.floor(Math.random() * mensagensPote.length);
        } while (
            mensagensPote.length > 1 &&
            indice === ultimaMensagemPote
        );

        ultimaMensagemPote = indice;

        mensagem.textContent = mensagensPote[indice];
        mensagem.hidden = false;
        mensagem.classList.add("visivel");

        if (mensagem.style.display === "none") {
            mensagem.style.display = "block";
        }

        mensagem.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
}

// =====================================
// QUANDO SENTIR SAUDADE
// =====================================

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

let ultimaMensagemSaudade = -1;

function iniciarSaudade() {
    const botao = document.getElementById("botaoSaudade");
    const caixa = document.getElementById("mensagemSaudade");
    const texto = document.getElementById("textoSaudade");

    if (!botao || !caixa || !texto || botao.dataset.ativo) return;
    botao.dataset.ativo = "sim";

    botao.addEventListener("click", function () {
        let indice;

        do {
            indice = Math.floor(Math.random() * mensagensSaudade.length);
        } while (
            mensagensSaudade.length > 1 &&
            indice === ultimaMensagemSaudade
        );

        ultimaMensagemSaudade = indice;
        texto.textContent = mensagensSaudade[indice];
        caixa.hidden = false;
        caixa.classList.add("visivel");
    });
}

// =====================================
// NOSSA CONSTELAÇÃO
// =====================================

const estrelasConstelacao = [
    {
        x: 12, y: 28,
        mensagem: "Você é uma das coincidências mais bonitas que a vida colocou no meu caminho. ♥"
    },
    {
        x: 30, y: 15,
        mensagem: "Se eu pudesse escolher um lugar para olhar as estrelas, seria ao seu lado."
    },
    {
        x: 47, y: 35,
        mensagem: "Cada estrela guarda uma história. Eu espero que a gente tenha muitas para contar."
    },
    {
        x: 65, y: 17,
        mensagem: "Você faz parte do meu universo de um jeito que palavras nem sempre conseguem explicar. ♥"
    },
    {
        x: 84, y: 32,
        mensagem: "Que nunca faltem carinho, respeito e motivos para sorrirmos juntos."
    },
    {
        x: 72, y: 65,
        mensagem: "Nossa história começou em 16 de outubro de 2026. Que venham muitos capítulos bonitos."
    },
    {
        x: 45, y: 78,
        mensagem: "Mesmo em noites diferentes, duas pessoas podem olhar para o mesmo céu."
    },
    {
        x: 20, y: 65,
        mensagem: "Entre tantas estrelas, esta mensagem encontrou você. Guarde-a com carinho. ♥"
    }
];

function iniciarConstelacao() {
    const area = document.getElementById("areaConstelacao");
    const caixa = document.getElementById("mensagemConstelacao");
    const texto = document.getElementById("textoConstelacao");

    if (!area || !caixa || !texto || area.dataset.criada) return;
    area.dataset.criada = "sim";

    const ligacoes = [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [4, 5], [5, 6], [6, 7], [7, 0], [2, 6]
    ];

    function desenharLinhas() {
        area.querySelectorAll(".linha-constelacao").forEach(function (linha) {
            linha.remove();
        });

        const largura = area.clientWidth;
        const altura = area.clientHeight;

        ligacoes.forEach(function (par) {
            const a = estrelasConstelacao[par[0]];
            const b = estrelasConstelacao[par[1]];

            const x1 = largura * a.x / 100;
            const y1 = altura * a.y / 100;
            const x2 = largura * b.x / 100;
            const y2 = altura * b.y / 100;

            const linha = document.createElement("span");
            linha.className = "linha-constelacao";
            linha.style.left = x1 + "px";
            linha.style.top = y1 + "px";
            linha.style.width = Math.hypot(x2 - x1, y2 - y1) + "px";
            linha.style.transform =
                "rotate(" + Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI + "deg)";

            area.appendChild(linha);
        });
    }

    estrelasConstelacao.forEach(function (estrela, indice) {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "estrela-interativa";
        botao.textContent = "✦";
        botao.setAttribute(
            "aria-label",
            "Revelar mensagem da estrela " + (indice + 1)
        );

        botao.style.left = estrela.x + "%";
        botao.style.top = estrela.y + "%";
        botao.style.transform = "translate(-50%, -50%)";

        botao.addEventListener("click", function () {
            texto.textContent = estrela.mensagem;
            caixa.hidden = false;
            caixa.classList.add("visivel");

            area.querySelectorAll(".estrela-interativa").forEach(function (outra) {
                outra.classList.remove("estrela-escolhida");
            });

            botao.classList.add("estrela-escolhida");
        });

        area.appendChild(botao);
    });

    desenharLinhas();
    window.addEventListener("resize", desenharLinhas);
}

// =====================================
// INICIAR QUANDO O HTML ESTIVER PRONTO
// =====================================

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarSite);
} else {
    iniciarSite();
}
    
