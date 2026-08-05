/* ==========================================
   APP JS
========================================== */

/**
 * Detect the correct path to the components folder.
 * Root pages use: components/
 * Pages inside folders (e.g. news/) use: ../components/
 */

const COMPONENT_PATH = window.location.pathname.includes("/news/")
    ? "../components/"
    : "components/";

/* ==========================================
   LOAD COMPONENT
========================================== */

async function loadComponent(id, file) {

    const container = document.getElementById(id);

    if (!container) return;

    try {

        const response = await fetch(COMPONENT_PATH + file);

        if (!response.ok) {

            throw new Error(`Failed to load ${file}`);

        }

        container.innerHTML = await response.text();

    }

    catch (error) {

        console.error(`Component Error (${file})`, error);

    }

}

/* ==========================================
   LOAD ALL COMPONENTS
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

    const components = [

        ["navbar", "navbar.html"],

        ["hero", "hero.html"],

        ["highlights", "bento-grid.html"],

        ["videos", "videos.html"],

        ["news", "news.html"],

        ["gallery", "gallery.html"],

        ["contact", "contact.html"],

        ["footer", "footer.html"]

    ];

    for (const [id, file] of components) {

        await loadComponent(id, file);

    }

});