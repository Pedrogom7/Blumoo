// JavaScript for Chat Dialog
document.addEventListener("DOMContentLoaded", () => {
    const chatButtons = document.querySelectorAll(".chat-icon");
    const chatDialog = document.getElementById("chat-dialog");
    const closeButton = document.querySelector(".close-button");

    chatButtons.forEach(button => {
        button.addEventListener("click", () => {
            chatDialog.style.display = "block";
        });
    });

    closeButton.addEventListener("click", () => {
        chatDialog.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == chatDialog) {
            chatDialog.style.display = "none";
        }
    });
});
