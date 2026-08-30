// ==========================================
// PROJECT FILTERS
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        // Get selected category
        const selectedCategory = button.dataset.filter;

        // Show / hide projects
        projectCards.forEach(card => {

            const projectCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                projectCategory === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});