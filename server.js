const express = require('express');
const sequelize = require("./config/connection.js")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});