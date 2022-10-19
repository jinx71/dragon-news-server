const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const data = require('./data/categories.json')
app.use(cors())

app.get("/categories", (req, res) => {
  res.send(data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


