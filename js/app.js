const url = 'https://api.github.com/users/JenGaut';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const username = data.login;
    const profileUrl = data.html_url;
  
    // Mettre à jour les éléments HTML avec les données de l'API GitHub
    document.getElementById('github-username').innerHTML = username;
    document.getElementById('github-username').setAttribute('href', profileUrl);
    document.getElementById('github-repos').textContent = data.public_repos;
  })
  .catch(error => console.error(error));

