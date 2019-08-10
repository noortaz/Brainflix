const express = require('express');
const app = express();
const cors = require('cors');
const videoData = require('./sideVideo.json');

app.use(cors());
app.use(express.json());


app.get("/videos", videoData )


app.listen(5000, () => console.log('listening on port 5000'));