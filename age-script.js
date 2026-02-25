function calculateLife() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        alert("Please enter your date of birth!");
        return;
    }

    const birthDate = new Date(dobInput);
    const today = new Date();

    if (birthDate > today) {
        alert("Date of birth cannot be in the future!");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You have lived exactly <br><strong>${years} years, ${months} months, and ${days} days</strong>.`;
}