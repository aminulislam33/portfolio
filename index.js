require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});