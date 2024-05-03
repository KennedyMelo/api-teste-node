var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.json([
        {
            "id": 1,
            "preco": 58.55,
            "tipo": "VENDA",
            "data": "2020-09-15"
          },
          {
            "id": 2,
            "preco": 38.55,
            "tipo": "VENDA",
            "data": "2021-09-15"
          },
          {
            "id": 3,
            "preco": 18.55,
            "tipo": "COMPRA",
            "data": "2020-02-15"
          },
          {
            "id": 4,
            "preco": 15.55,
            "tipo": "COMPRA",
            "data": "2023-09-15"
          },
          {
            "id": 5,
            "preco": 22.33,
            "tipo": "VENDA",
            "data": "2022-01-13"
          }
    ])
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
});