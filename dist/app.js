"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server running on " + PORT);
});
