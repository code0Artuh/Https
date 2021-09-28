const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", function (req, res) {
    res.render('index', {titulo: "OLA MUNDO!!!"})
});

app.get("/pagina", function (req, res) {
    res.render('pagina')
});

app.get("/teste2", function (req, res) {
    res.send('Hello3')
});

/*app.post
app.put
app.delete*/

app.listen(port, ()=> console.log(`servidor rodando em http://localhost:${port}`));