const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const multer = require("multer");
const path = require('path');
const db = require("./models");
const apiRoutes = require('./routes/index');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.static(path.join(__dirname, '../../frontend/public/static/images')));
app.use(bodyParser.json()); // parses the incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(cookieParser()); // to parse cookies attached to the client request object
app.use(express.json()); // To parse the incoming requests with JSON payloadsthan the server-side app (8080)
// set up router for handling HTTP requests related to each route


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/public/static/images");
    },
    filename: function (req, file, cb) {
        console.log("path", file);
        cb(null, Date.now() + file.originalname);
    },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
});

app.use("/api", apiRoutes);

// const PORT = process.env.PORT || 3000;  --> for production
db.sequelize.sync().then(() => {
    app.listen(8080, console.log(`Server running on port 8080`))
    console.log("--------------------aaaaaaaaaaaaa--------------");
});