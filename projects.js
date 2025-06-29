const username ="Dae Grodin";
const container = document.getElementById("projects-Container");

async function loadRepos() {
    try {
        const response = await fetch ("https://api.github.com/users/$(DaeGrodin)/repos");
        if (!response.ok) {
            throw new Error (`GitHub API error: ${response.status}`);  
        }

        const repos = await response.json();

        repos.forEach(repo => {
            const card = document.createElement("div");
            card.className = "repo-card";

            card.InnerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
            <a href = ${repo.html_url}" target="_blank">View on Github</a>
        `;

        container.appendChild(card);

      });
    } catch(error) {
        console.error("Error loading repositories:", error);  
    }
}

loadRepos();