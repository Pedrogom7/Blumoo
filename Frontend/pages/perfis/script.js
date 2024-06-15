document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("categoryFilter");
    const stageFilter = document.getElementById("stageFilter");
    const searchBar = document.getElementById("searchBar");
    const profileCards = document.getElementById("profileCards").children;

    function filterProfiles() {
        const category = categoryFilter.value.toLowerCase();
        const stage = stageFilter.value.toLowerCase();
        const search = searchBar.value.toLowerCase();

        Array.from(profileCards).forEach(card => {
            const cardCategory = card.getAttribute("data-category").toLowerCase();
            const cardStage = card.getAttribute("data-stage").toLowerCase();
            const cardText = card.innerText.toLowerCase();

            const categoryMatch = category === "" || cardCategory.includes(category);
            const stageMatch = stage === "" || cardStage.includes(stage);
            const searchMatch = search === "" || cardText.includes(search);

            if (categoryMatch && stageMatch && searchMatch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    categoryFilter.addEventListener("change", filterProfiles);
    stageFilter.addEventListener("change", filterProfiles);
    searchBar.addEventListener("keyup", filterProfiles);
});
