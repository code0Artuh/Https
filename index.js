const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send('Hello World!')
});

app.get("/teste", function (req, res) {
    res.send('Hello2')
});

app.get("/teste2", function (req, res) {
    res.send('Hello3')
});

/*app.post
app.put
app.delete*/

app.listen(3000);