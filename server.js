const express = require('express')
const path = require('path');
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}
app.use(express.static('.'));
const server = https.createServer(httpsOptions, app).listen(port, () => {
    console.log('server running at ' + port)
})