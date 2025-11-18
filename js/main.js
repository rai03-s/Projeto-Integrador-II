const botoesPedido = document.querySelectorAll(".btn-small");

botoesPedido.forEach(botao => {
    botao.addEventListener("click", () => {
    
        const item = botao.closest("li");
        const mensagem = item.querySelector(".mensagem");

        mensagem.textContent = "Pedido a caminho! 🍔🔥";
        mensagem.style.color = "#ffb800";
    });
});
const fotoDestaque = document.querySelectorAll(".card");

fotoDestaque.forEach(card => {
    card.addEventListener("mouseover", function () {
        card.style.transform = "scale(1.07)";
        card.style.transition = "0.2s";
    });

    card.addEventListener("mouseout", function () {
        card.style.transform = "scale(1)";
    });
});
