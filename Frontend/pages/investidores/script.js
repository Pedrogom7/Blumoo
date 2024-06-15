// Script específico da página de investidores

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const investors = document.querySelectorAll(".investor");

    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase();
        investors.forEach(investor => {
            const investorName = investor.querySelector("h2").textContent.toLowerCase();
            if (investorName.includes(searchTerm)) {
                investor.style.display = "flex";
            } else {
                investor.style.display = "none";
            }
        });
    });

    // Função para abrir e fechar o diálogo de chat
    const chatIcon = document.querySelector(".chat-icon");
    const chatDialog = document.getElementById("chat-dialog");
    const closeButton = chatDialog.querySelector(".close-button");
    const chatSendButton = chatDialog.querySelector(".chat-send-button");
    const chatInput = chatDialog.querySelector(".chat-input");
    const chatMessages = chatDialog.querySelector(".chat-messages");

    chatIcon.addEventListener("click", () => {
        chatDialog.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        chatDialog.style.display = "none";
    });

    chatSendButton.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement("p");
            messageElement.textContent = `Você: ${message}`;
            chatMessages.appendChild(messageElement);
            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            chatSendButton.click();
        }
    });
});
