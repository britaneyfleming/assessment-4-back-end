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

encouragementBtn.addEventListener('click', getEncouragement)