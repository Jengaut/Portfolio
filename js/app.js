const fetch = require('node-fetch');
require('dotenv').config();

const url = 'https://api.github.com/users/JenGaut';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const username = data.login;
    const profileUrl = data.html_url;
  
    // Mettre à jour les éléments HTML avec les données de l'API GitHub
    document.getElementById('github-username').innerHTML = `<a href="${profileUrl}">${username}</a>`;
    document.getElementById('github-repos').textContent = data.public_repos;
  })
  .catch(error => console.error(error));
