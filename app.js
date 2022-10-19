const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const data = require('./data/categories.json')
app.get("/categories", (req, res) => {
  res.send(data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


