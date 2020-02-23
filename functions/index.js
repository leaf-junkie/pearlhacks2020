//////////////////////////////////////////////////////////////////////////////////
// Bandwidth
//////////////////////////////////////////////////////////////////////////////////
const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const express = require("express");
const app = express();

const BandwidthMessaging = require('@bandwidth/messaging');
BandwidthMessaging.Configuration.basicAuthUserName = "token";
BandwidthMessaging.Configuration.basicAuthPassword = "secret";
const messagingController = BandwidthMessaging.APIController;

const database = admin.database();
// create reference to db object
const dbRefObj = database.ref();

// Sync object changes - this should log the message object
dbRefObj.on("child_added", snap => {
  console.log(snap.val());

  snap.forEach(function(childSnapshot) {
    const childData = childSnapshot.val();
    console.log(childData);
  });
  
  // const from = snap.child("from");
  // const text = snap.child("text");
  // const time = snap.child("time");

});

// Retrieve entry from database
async function readMessageData(messageId, from, text, time) {

  // for (i = 0; i < 5; i++) {
  //   messageId = 
  // }

  var messageObj = admin.database().ref("/");
  messageObj.on("value", function(snapshot) {
    console.log(snapshot.val());
  });
}

// async function readMessageData(messageId, from, text, time) {
//   await admin.database().ref("/messages" + messageId).set({
//     messageId,
//     from,
//     text,
//     time
//   });
// }

// Add new entry to database
async function writeMessageData(messageId, direction, from, state, text, time, to) {
  await admin.database().ref("/messages" + messageId).set({
    messageId,
    direction,
    from,
    state,
    text,
    time,
    to
  });
}

// API endpoints
// =============================================================================
app.get('/api', async (req, res) => {
  var data = req.body;
  try {
    console.log(data);
    await readMessageData(data.messageId, data.from, data.text, data.time);
    res.send(data);
  } 
  catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send(error.message);
  }
  res.send("hello, world!!");
});

// receive a text callback from bandwidth
app.post('/api/messages', async (req, res) => {
  var data = req.body;
  try {
    console.log(data);
    await writeMessageData(data.messageId, data.direction, data.from, data.state, data.text, data.time, data.to);
    res.send(data);
  }
  catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send(error.message);
  }
});

// =============================================================================

// store results to an export
exports.app = functions.https.onRequest(app);