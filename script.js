
document.addEventListener("DOMContentLoaded", function () {
    // Bootstrap collapses the mobile navbar automatically.
    // Close the mobile menu after clicking a same-page navigation link.
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Simple gallery image helper:
    // Replace each .gallery-placeholder with your own image later.
    document.querySelectorAll("[data-gallery-image]").forEach(function (holder) {
        const imagePath = holder.getAttribute("data-gallery-image");
        if (!imagePath) return;

        const img = new Image();
        img.src = imagePath;

        img.onload = function () {
            holder.innerHTML = "";
            holder.classList.add("p-0");
            const image = document.createElement("img");
            image.src = imagePath;
            image.alt = holder.getAttribute("data-gallery-alt") || "Winnemucca's Water Hole No. 1";
            image.className = "w-100 h-100 object-fit-cover";
            holder.appendChild(image);
        };
    });
});
