<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>GitHub OAuth Callback Page</title>
  </head>
  <body>
    <h1>GitHub OAuth Callback Page</h1>
    <p>Access Token: <span id="access-token"></span></p>
    <script>
      // Récupère le code d'autorisation depuis l'URL
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      // Envoie une requête à votre serveur pour obtenir le jeton d'accès
      fetch('/api/github/token?code=' + code)
        .then(response => response.json())
        .then(data => {
          // Affiche le jeton d'accès sur la page
          const accessToken = data.access_token;
          document.getElementById('access-token').textContent = accessToken;
        });
    </script>
  </body>
</html>
