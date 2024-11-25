document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tool-section');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tool;

            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');

            sections.forEach((section) => {
                section.id === target
                    ? section.classList.add('active')
                    : section.classList.remove('active');
            });
        });
    });
});

function calculateAgeAndZodiac() {
    const birthdate = document.getElementById('birthdate').value;
    const birthdateError = document.getElementById('birthdate-error');
    birthdateError.style.display = "none";

    if (!birthdate) {
        birthdateError.innerText = "Please enter your birthdate.";
        birthdateError.style.display = "block";
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const zodiacSigns = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
    const cutOffDates = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
    const month = birthDate.getMonth();
    const day = birthDate.getDate();
    const zodiac = day > cutOffDates[month] ? zodiacSigns[(month + 1) % 12] : zodiacSigns[month];

    document.getElementById('age-result').innerText = `You are ${age} years old and your Zodiac sign is ${zodiac}.`;
}

function convertTemperature() {
    const temp = parseFloat(document.getElementById('temp-input').value);
    const unit = document.getElementById('temp-unit').value;

    if (isNaN(temp)) return;

    const result = unit === "C"
        ? `${(temp * 9) / 5 + 32} °F`
        : `${((temp - 32) * 5) / 9} °C`;
    document.getElementById('temp-result').innerText = `Converted Temperature: ${result}`;
}

function generateQuote() {
    const quotes = ["Believe in yourself!", "You are stronger than you think.", "Every day is a second chance.", "Never stop learning.", "Your potential is endless."];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-result').innerText = randomQuote;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weight-unit').value;
    const height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('height-unit').value;

    const weightError = document.getElementById('weight-error');
    const heightError = document.getElementById('height-error');

    weightError.style.display = "none";
    heightError.style.display = "none";

    if (isNaN(weight)) {
        weightError.innerText = "Please enter your weight.";
        weightError.style.display = "block";
        return;
    }

    if (isNaN(height)) {
        heightError.innerText = "Please enter your height.";
        heightError.style.display = "block";
        return;
    }

    let weightInKg = weight;
    if (weightUnit === "lbs") {
        weightInKg = weight * 0.453592;
    }

    let heightInMeters = height;
    if (heightUnit === "cm") {
        heightInMeters = height / 100;
    } else if (heightUnit === "in") {
        heightInMeters = height * 0.0254;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let message = `Your BMI is ${bmi.toFixed(2)}. `;
    if (bmi < 18.5) message += "You are underweight.";
    else if (bmi < 24.9) message += "You have a healthy weight.";
    else if (bmi < 29.9) message += "You are overweight.";
    else message += "You are obese.";

    document.getElementById('bmi-result').innerText = message;
}

document.querySelector('.cta-button').addEventListener('click', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tool-section');

    const targetTool = 'age-zodiac'; // First tool's ID (Age & Zodiac)

    // Activate the corresponding tab
    tabs.forEach((tab) => {
        if (tab.dataset.tool === targetTool) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Show the corresponding section
    sections.forEach((section) => {
        if (section.id === targetTool) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
