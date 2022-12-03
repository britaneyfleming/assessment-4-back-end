const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);


const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);


const { getEncouragement } = require('./controller')

app.get("/api/encourage", getEncouragement);


const { getStudyTip } = require('./controller')

app.get("/api/study", getStudyTip);


const { getReminder } = require('./controller')

app.get("/api/reminder", getReminder);

app.listen(4000, () => console.log("Server running on 4000"));
