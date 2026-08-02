/* ==========================================
   APP JS
   Royal Palace Website
========================================== */

async function loadComponent(id, file) {

    try {

        const response = await fetch(`components/${file}`);

        if (!response.ok) {

            throw new Error(`Failed to load ${file}`);

        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    } catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "navbar.html");

    await loadComponent("hero", "hero.html");

    await loadComponent("highlights", "bento-grid.html");

    await loadComponent("videos", "videos.html");

    await loadComponent("news", "news.html");

    await loadComponent("gallery", "gallery.html");

    await loadComponent("contact", "contact.html");

    await loadComponent("footer", "footer.html");

});