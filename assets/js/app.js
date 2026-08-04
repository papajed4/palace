/* ==========================================
   APP JS
========================================== */

async function loadComponent(id, file) {

    const container = document.getElementById(id);

    /* If this page doesn't have the component,
       just skip it. */

    if (!container) {

        return;

    }

    try {

        const response = await fetch(`components/${file}`);

        if (!response.ok) {

            throw new Error(`Failed to load ${file}`);

        }

        const html = await response.text();

        container.innerHTML = html;

    }

    catch(error){

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", async ()=>{

    await loadComponent("navbar","navbar.html");

    await loadComponent("hero","hero.html");

    await loadComponent("highlights","bento-grid.html");

    await loadComponent("videos","videos.html");

    await loadComponent("news","news.html");

    await loadComponent("gallery","gallery.html");

    await loadComponent("contact","contact.html");

    await loadComponent("footer","footer.html");

});