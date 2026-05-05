document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".page").forEach(el => {
        fetch("page.html")
            .then(res => res.text())
            .then(html => {
                el.innerHTML = html;
            });
    });
});
