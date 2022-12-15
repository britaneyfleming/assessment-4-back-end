const fortune = ["A faithful friend is a strong defense.", "Advice, when most needed, is least heeded.", "Protective measures will prevent costly disasters."];

module.exports = {
   
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
,
    getFortune: (req, res) => {
        
        // choose random fortune
        let randomIndex1 = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex1];
      
        res.status(200).send(randomFortune);
    }
    ,
    getEncouragement: (req, res) => {
        const encouragement = ["You can do this!", "You're doing great!", "Keep going!"];
      
        // choose random fortune
        let randomIndex2 = Math.floor(Math.random() * encouragement.length);
        let randomEncouragement = encouragement[randomIndex2];
      
        res.status(200).send(randomEncouragement);
    }
    ,
    getStudyTip: (req, res) => {
        const studyTip = ["Give your brain a break!", "Take detailed notes!", "Study for 30 minute intervals!"];
      
        // choose random fortune
        let randomIndex3 = Math.floor(Math.random() * studyTip.length);
        let randomStudyTip = studyTip[randomIndex3];
      
        res.status(200).send(randomStudyTip);
    }
    ,
    getReminder: (req, res) => {
        const reminder = ["Go for a walk!", "Eat lunch.", "Stretch!"];
      
        // choose random fortune
        let randomIndex4 = Math.floor(Math.random() * reminder.length);
        let randomReminder = reminder[randomIndex4];
      
        res.status(200).send(randomReminder);
    },
    addFortune: (req, res) => {
        // let newFortune = req.body 
        console.log(req.body.fortune)
    }

}