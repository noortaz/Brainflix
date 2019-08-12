const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');

const videoData = require('./sideVideo.json');
const mainVideoData = require('./mainVideo.json');

const id = videoData.map((item) => item.id);
// console.log(id);
// //console.log(mainVideoData[0].id);

let x = null;

router.get('/', (req, res) => {
    res.status(201).json(videoData);
});


router.get(`/:videoId`, (req, res) => {
    const selectedVideo = mainVideoData.filter((item) => 
        item.id == req.params.videoId
    )
    res.status(201).json(selectedVideo[0]);
})

router.post('/', (req, res) => {
    const video = req.body;
    const newVideo = { ...video, id: `${uuid().substr(0, 12)}`}
    videoData.push(newVideo);
    mainVideoData.push(newVideo);
    res.json(newVideo);
})


module.exports = router;