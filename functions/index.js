const functions = require("firebase-functions");
const express = require("express");

const app = express();

// JSON body parser middleware for parsing callback events
app.use(express.json());

app.get("/messages", (request, response) => {
    response.send(`${Date.now()}`);
});

// store results to an export
exports.app = functions.https.onRequest(app);