const express = require('express');
const cors = require('cors');
const path = __dirname;
const app = express();
const port = 3000;

app.use (
    cors ({
        origin: "*"
    })
);
app.use(express.static(path));

app.get('/*', cors(), function (req,res) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path + "/index.html");
});

app.listen(port);