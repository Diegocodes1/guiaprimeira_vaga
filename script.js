// =========================
// Cards clicáveis
// =========================

const paginas = {
    "📚 O que estudar": "pages/estudar.html",
    "💻 Projetos": "pages/projetos.html",
    "📄 Currículo": "pages/curriculo.html",
    "💼 LinkedIn": "pages/linkedin.html",
    "🎤 Entrevistas": "pages/entrevistas.html",
    "🚀 Roadmap": "pages/roadmap.html"
};

document.querySelectorAll(".card").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        const titulo = card.querySelector("h3").textContent.trim();

        if (paginas[titulo]) {
            window.location.href = paginas[titulo];
        }

    });

});