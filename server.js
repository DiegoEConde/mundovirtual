const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('./mi_base.db'); // Ruta a tu archivo SQLite

// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para mostrar formulario login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Ruta para procesar login
app.post('/login', (req, res) => {
  const { email, pass } = req.body;

  db.get('SELECT * FROM usuarios WHERE email = ? AND pass = ?', [email, pass], (err, row) => {
    if (err) {
      return res.status(500).send('Error en la base de datos');
    }
    if (row) {
      res.send(`¡Bienvenido, ${row.nombre} ${row.apellido}!`);
    } else {
      res.send('Email o contraseña incorrectos.');
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


//pendiente de revision