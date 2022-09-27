const getRandom = (n) => {
    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomAppearances = [];
    for (let i = 0; i <= 1000; i++) {
        randomAppearances.push({value: i, appearances: 0});
    }
    for (let i = 0; i <= n; i++) {
        let randomNum = getRandomNum(1, 1000);
        randomAppearances[randomNum].appearances++;
    }
    return randomAppearances;
}

process.on('message', (msg) => {
    if (msg[0] == 'start') {
        const randomNumber = getRandom(msg[1]);
        process.send(randomNumber);
    } else {
        process.send('error');
    }
})
