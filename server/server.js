import {config } from 'dotenv';
import app from './app.js';
import connectionToDB from './MongoDbConnection/connect.js';
config();

const PORT=process.env.PORT || 8087;

app.listen(PORT,async()=>{
    await connectionToDB();
    console.log(`app is running at http://localhost:${PORT}`)
});