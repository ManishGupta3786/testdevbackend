const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors(
    {
        origin: [
          "http://localhost:8080",
          "http://localhost:3000",
          "http://18.234.53.21", // react localhost mobile ip
          "http://3.109.156.217",
          "https://test.rentofurniture.com"
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
      }
))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/click', (req, res) => {
    return res.json({ status: 'success', message: 'Welcome to my world.' });
})

app.listen(4000, () => {
    console.log("server is running at port : 4000");
})