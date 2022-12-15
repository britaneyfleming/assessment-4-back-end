const express = require("express");
const cors = require("cors");

const app = express();

const {getCompliment, getFortune, getEncouragement, getStudyTip, getReminder, addFortune} = require('./controller')

app.use(cors());

app.use(express.json());

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/encourage", getEncouragement);


app.get("/api/study", getStudyTip);

app.get("/api/reminder", getReminder);

app.post("/api/fortune", addFortune);

app.listen(4000, () => console.log("Server running on 4000"));