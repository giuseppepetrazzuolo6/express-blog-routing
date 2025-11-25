const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// index
app.get('/api/posts', (req, res) => {
    res.send('Lista dei posts');
});

// show
app.get('/api/posts/:id', (req, res) => {
    res.send('Dettagli del post');
});

// store
app.post('/api/posts', (req, res) => {
    res.send('Creazione nuovo post');
});

// update
app.put('/api/posts/:id', (req, res) => {
    res.send('Modifica del post');
});

// modify
app.patch('/api/posts/:id', (req, res) => {
    res.send('Piccola modifica del post');
});

// destroy
app.delete('/api/posts/:id', (req, res) => {
    res.send('Rimozione post');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});