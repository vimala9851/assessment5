function generateRandomNumber() {
    const min = parseInt(document.getElementById('minValue').value);
    const max = parseInt(document.getElementById('maxValue').value);
    
    if (isNaN(min) || isNaN(max)) {
        alert('Please enter valid numbers');
        return;
    }
    
    if (min >= max) {
        alert('Min value should be less than Max value');
        return;
    }

    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = `Your random value from the selected range is ${randomValue}`;
}
