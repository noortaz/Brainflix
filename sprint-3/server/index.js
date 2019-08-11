const express = require('express');
const app = express();
const cors = require('cors');

const sideVideo = require('./videoList')

app.use(cors());
app.use(express.json());


app.use("/videos", sideVideo);


app.listen(5000, () => console.log('listening on port 5000'));