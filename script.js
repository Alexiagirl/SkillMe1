// Select the hamburger button
const menuToggle = document.querySelector(".menu-toggle");

// Select the navigation menu
const navLinks = document.querySelector(".nav-links");

// Listen for clicks on the hamburger button
menuToggle.addEventListener("click", function () {

    // Open or close the menu
    navLinks.classList.toggle("open");

    // Update accessibility information
    const isOpen = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);

});
// My project data
const projects = [
    {
        title: "About Me",
        description: "A webpage introducing me and sharing information about myself.",
        image: "images/about.png",
        tags: ["HTML", "CSS"],
        link: "#"
    },

    {
        title: "Titoni Culture",
        description: "A webpage introducing Titoni culture and its traditions.",
        image: "images/culture.png",
        tags: ["HTML", "CSS"],
        link: "#"
    },

    {
        title: "Translator",
        description: "A simple webpage for a translator.",
        image: "images/translate.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#"
    }
];
function renderProjects() {

    const container = document.querySelector("#project-container");

    container.innerHTML = projects.map(function(project) {

        return `
            <div class="project-card">

                <img src="${project.image}" alt="${project.title}">

                <h2>${project.title}</h2>

                <p>${project.description}</p>

                <a href="${project.link}">View Project</a>

            </div>
        `;

    }).join("");

}

renderProjects();

function filterProjects(category) {

    let filteredProjects;

    if (category === "All") {
        filteredProjects = projects;
    } else if (category === "HTML") {
        filteredProjects = projects.filter(function(project) {
            return project.tags.includes("HTML");
        });
    } else {
        filteredProjects = projects.filter(function(project) {
            return project.tags.includes(category);
        });
    }

    const container = document.querySelector("#project-container");

    container.innerHTML = filteredProjects.map(function(project) {

        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.link}">View Project</a>
            </div>
        `;

    }).join("");
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.dataset.filter;

        filterProjects(category);

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Highlight the selected button
        button.classList.add("active");

    });

});

filterButtons[0].classList.add("active");