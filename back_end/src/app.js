const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { MongodbUrl } = require('./keys')
const morgan = require('morgan')
const UserAuth = require('./Routers/UserAuthentication.js')
const port = process.env.PORT || 9000;

mongoose.connect(MongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connection with DataBase successful..........", MongodbUrl);
});

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('common'));

app.use('/uAuth', UserAuth);

app.listen(port, () => console.log(`we are working port ${port}`));