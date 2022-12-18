const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data2 = res.data;
            alert(data2);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const encourageBtn = document.getElementById("encourageButton")

const getEncouragement = () => {
    axios.get("http://localhost:4000/api/encourage/")
        .then(res => {
            const data3 = res.data;
            alert(data3);
    });
};

encourageBtn.addEventListener('click', getEncouragement)

const studyBtn = document.getElementById("studyButton")

const getStudyTip = () => {
    axios.get("http://localhost:4000/api/study/")
        .then(res => {
            const data4 = res.data;
            alert(data4);
    });
};

studyBtn.addEventListener('click', getStudyTip)

const reminderBtn = document.getElementById("reminderButton")

const getReminder = () => {
    axios.get("http://localhost:4000/api/reminder/")
        .then(res => {
            const data5 = res.data;
            alert(data5);
    });
};

reminderBtn.addEventListener('click', getReminder)

const addFortuneButton = document.getElementById("AddFortuneButton")

const addFortune = (body) => {
    console.log(body)
    axios.post("http://localhost:4000/api/fortune/", body)
        .then(res => {
            const data5 = res.data;
            alert(data5);
    });
};

addFortuneButton.addEventListener('click', addFortune)

function submitHandler(event){
    event.preventDefault();
    let input = document.getElementById("input")
    let body = {fortune:input.value}
    addFortune(body)
};