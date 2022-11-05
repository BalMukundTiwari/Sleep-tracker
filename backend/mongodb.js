const MongoClient = require('mongodb').MongoClient;
const password = "Mukund123"

const dbURI = `mongodb+srv://mukund:Mukund123@mukund-tiwari.cwqsr02.mongodb.net/test`

module.exports = async function() {
    const database = await MongoClient.connect(dbURI, { useUnifiedTopology: true });
    const sleeptracker = database.db("sleep-tracker")
    return { sleeptracker }
}