require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.use('/auth', require('./routes/auth.js'));

const port = process.env.PORT 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

