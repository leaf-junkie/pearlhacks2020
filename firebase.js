// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyAogBD8xJy0ZLL8HTLPuSXIPkrrPgYuOnM",
//     authDomain: "pearlhacks2020.firebaseapp.com",
//     databaseURL: "https://pearlhacks2020.firebaseio.com",
//     projectId: "pearlhacks2020",
//     storageBucket: "pearlhacks2020.appspot.com",
//     messagingSenderId: "411488390573",
//     appId: "1:411488390573:web:a297b1a9a62f231a742524",
//     measurementId: "G-ZB9GT5FZHB"
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();
// let counter = 0;
// $("#sendAlertBtn").on("click", function() {
//     console.log("clicked");
//     counter++;
//     $("#test").text(counter);
//     database.ref().set({
//         test: counter
//     });
// });

// database.ref().on("value", function(snapshot) {
//     console.log(snapshot.val());
//     // Update the clickCounter variable with data from the database.
//     counter = snapshot.val().test;
//     // Update the html associated with the number.
//     $("#test").text(counter);
// }, function(errorObject) {
//     // In case of error this will print the error
//     console.log(`The read failed: ${errorObject.code}`);
// });