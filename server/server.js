const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5100;



app.use(cors());

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/data/users.json', (req, res) => {
    res.sendFile(__dirname + '/data/users.json');
});

app.use(express.json())

app.use(express.urlencoded({ extended: true }))



app.use('/data', express.static(path.join(__dirname, 'data')));


// Middleware pour accepter les données JSON
app.use(express.json());


app.post('/login', (req, res) => {
  const { email, password } = req.body;


      const data = fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8');
      
      const users = JSON.parse(data).users;
      
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        
          res.json({ message: 'Connexion réussie' });
      } else {
        
          res.status(401).json({ message: 'Email ou mot de passe incorrect' });
      }

});

app.post('/', (req, res) => {

  const { email, password } = req.body
  console.log(req.body)
  // Affichage des données dans la console
  console.log(`  Email: ${email}, password: ${password}`)

  res.send(`<h1> Merci ${email} pour votre inscription </h1>`)
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur lancé à http://localhost:${port}`);
});
