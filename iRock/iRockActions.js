function touchRock() {
    const userName = prompt(`What's your name?`, `Enter your name here.`);
    if (userName) {
        alert(`Nice to meet you! ${userName}!`);
        document.getElementById("rockImg")
    }
    /*
    const birthYear = Number(prompt(`When were you born?`, `Enter your birth year here.`));
    const currentYear = Number(prompt(`What is the current year?`, `Enter the current year here.`));
    const userAge = currentYear - birthYear;
    if (userAge) {
        alert(`You are ${userAge} years old!`)
    }
    */
}

