document.addEventListener("DOMContentLoaded", () => {
    const editProfileButton = document.querySelector(".edit-profile-button");
    const profileDetailsSection = document.querySelector(".profile-details");
    const chatIcon = document.querySelector(".chat-icon");
    const chatDialog = document.getElementById("chat-dialog");
    const closeButton = document.querySelector(".close-button");
    const chatSendButton = document.querySelector(".chat-send-button");
    const chatInput = document.querySelector(".chat-input");
    const chatMessages = document.querySelector(".chat-messages");

    // Alternar visibilidade do formulário de edição de perfil
    editProfileButton.addEventListener("click", () => {
        profileDetailsSection.classList.toggle("hidden");
    });

    // Alternar visibilidade do diálogo de chat
    chatIcon.addEventListener("click", () => {
        chatDialog.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        chatDialog.style.display = "none";
    });

    // Enviar mensagem de chat
    chatSendButton.addEventListener("click", () => {
        const message = chatInput.value;
        if (message.trim()) {
            const messageElement = document.createElement("p");
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    // Salvar perfil (funcionalidade fictícia para demonstração)
    document.getElementById("profile-form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Perfil salvo com sucesso!");
    });
});
