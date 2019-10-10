const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/get-server-name', (req, res) => {
    res.send('Hello world')
    res.send(`Hi from ${process.env.SERVER_NAME}`)
    res.send(JSON.stringify(process.env));
    console.log(process.env.SERVER_NAME) 
})
app.listen(port, () => {
    console.log('connect to ' + port);
})
