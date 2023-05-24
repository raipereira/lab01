const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const config = require("./word");

const conn = mysql.createConnection(config);
const app = express();
app.use(cors());
app.get('/lookup/:word', (req, res) => {
  const word = req.params.word;
  conn.query(
    'SELECT * FROM entries WHERE word = ?',
    [word],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
