document.addEventListener("DOMContentLoaded", function () {
    function loadSection(sectionId, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    }

    loadSection("about-section", "content/about.htm");
    loadSection("mission-section", "content/mission.htm");
    loadSection("blog-section", "content/blog.htm");
    loadSection("summary-section", "content/summary.htm");
});
