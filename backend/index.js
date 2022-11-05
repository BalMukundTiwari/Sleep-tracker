const mongo = require('./mongodb');
const cors = require("cors");
const express = require("express");

let db = null;
// let database = mongo()
mongo()
.then((response) => {
  db = response["sleeptracker"]
  console.log("Database is running.")
})
.catch((error) => { console.log("Error in database connection.") })

const app = express();
app.use(express.json({limit: '700mb'}));
app.use(cors());
app.use(express.urlencoded({extended : true}));
    
app.post("/api/user", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const { uid, displayName, email, photoURL } = req.body;

    let userObject = {
        uid : uid, displayName, email, photoURL
    }

    db.collection('Users').insertOne(userObject)
    .then((response) => {
        res.status(200).send(JSON.stringify({status: "success", message: "User information has been stored to database"}));
    })
    .catch((error) => {
        res.status(404).send(JSON.stringify({status: "error", message: "Error in storing user information"}));
    })
})

app.post("/api/session", (req, res) => {
    console.log("Inside");
    res.setHeader('Content-Type', 'application/json');

    let d = new Date();

    let options = {
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    const { uid, startTime, endTime } = req.body;

    let sessionObject = {
        uid : uid, 
        startTime, 
        endTime,
        date: `${da}-${mo}-${ye}`
    }

    db.collection('Sessions').insertOne(sessionObject)
    .then((response) => {
        res.status(200).send(JSON.stringify({status: "success", message: "User information has been stored to database"}));
    })
    .catch((error) => {
        res.status(404).send(JSON.stringify({status: "error", message: "Error in storing user information"}));
    })
})

app.post("/api/getUserInfo", (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    
    let d = new Date();

    let options = {
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    const { uid } = req.body;

    db.collection('Sessions').find({uid: uid, date: `${da}-${mo}-${ye}`})
    .toArray()
    .then((response) => {
        if (response.length == 0) {
            res.status(200).send(JSON.stringify({status: "success", message: "User data for today is not present."}));
        } else {
            res.status(400).send(JSON.stringify({status: "success", stored: true, message: "User data is already present for day."}));
        }
    })
    .catch((error) => {
        res.status(400).send(JSON.stringify({status: "error", message: "Error in storing user information"}));
    })
})

app.listen(4200, () => {
    console.log("Server has been started at port 4200.")
});