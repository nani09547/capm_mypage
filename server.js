const cds   = require("@sap/cds");
const express = require("express");

cds.on("bootstrap", app => {
    app.use(express.static("app/webapp"));
});

module.exports = cds.server;
