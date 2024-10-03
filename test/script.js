const searchInput = document.getElementById('search-input');
let open = false;

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const searchQuery = searchInput.value.trim();
        if (searchQuery === 'oi') {
            window.location.href = 'ifsp.edu.br';
        }
    }
});

document.querySelector(".search-container img").addEventListener("click", () => {
    if (!open) {
        document.querySelector(".search-container input").style.width = "100%";
        document.querySelector(".search-container img").style.right = "42px";
        document.querySelector(".search-container img").style.transform = "rotate(360deg)";
        document.querySelector(".search-container input").style.opacity = "1";
        document.querySelectorAll(".search-container p").forEach((e) => {
            e.style.opacity = "0";
        });

        open = true;
    } else {
        document.querySelector(".search-container input").style.width = "0%";
        document.querySelector(".search-container input").style.opacity = "0";
        document.querySelector(".search-container img").style.transform = "rotate(0deg)";
        document.querySelectorAll(".search-container p").forEach((e) => {
            e.style.opacity = "1";
        });

        document.querySelectorAll(".sidebar .types div p").forEach((e) => {
            e.style.cssText = "";
        });
        open = false;
    }
});