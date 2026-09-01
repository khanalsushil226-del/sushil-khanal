
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

       
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

       
        button.classList.add("active");

        // Get selected category
        const selectedCategory = button.dataset.filter;

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
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});