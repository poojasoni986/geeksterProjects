// Select elements
const dobInput = document.querySelector('#dob');
const calculateButton = document.querySelector('#calculate');
const ageDisplay = document.querySelector('#age');

// Function to calculate age with exact years, months, and days
function calculateExactAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if the current day is before the birth day in the month
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of the previous month
        days += lastMonth.getDate();
    }

    // Adjust if the current month is before the birth month in the year
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

// Add event listener to the button
calculateButton.addEventListener('click', () => {
    const dob = dobInput.value;

    if (dob) {
        const { years, months, days } = calculateExactAge(dob);
        ageDisplay.textContent = `${years} years, ${months} months, and ${days} days`;
    } else {
        alert('Please enter your date of birth!');
    }
});
