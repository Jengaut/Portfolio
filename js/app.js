const url = "https://api.github.com/users/JenGaut";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    const username = data.login;
    const profileUrl = data.html_url;

    document.getElementById("github-username").innerHTML = username;
    document.getElementById("github-username").setAttribute("href", profileUrl);
  })
  .catch((error) => console.error(error));
