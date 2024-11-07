
const fs = require('fs');
const port = 5100;
const express = require('express')
const app = express()
// const bodyParser = require('body-parser');
app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.post('/u', (req, res)=>{
    
    const {email, password} = req.body
    console.log(req.body)
    // Affichage des données dans la console
    console.log(`  Email: ${email}, password: ${password}`)

    res.send(`<h1> Merci ${email} pour votre inscription </h1>`)
}) 


// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur à l'écoute sur http://localhost:${port}`);
});
