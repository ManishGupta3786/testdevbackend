const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/click', (req, res) => {
    return res.json({ status: 'success', message: 'Welcome to my world.' });
})

app.listen(4000, () => {
    console.log("server is running at port : 4000");
})