const express = require('express');
const app = express();
const path = require('path');

// Servir ton template Bootstrap dans le dossier public
app.use(express.static(path.join(__dirname, 'public')));

// Route principale -> renvoie index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Site lancé sur http://localhost:${PORT}`);
});
