document.getElementById('run-code').addEventListener('click', function() {
    const codeInput = document.getElementById('code-input').value;
    const feedback = document.getElementById('feedback');
    
    try {
        // Evaluate the player's code
        eval(codeInput);

        // Check for specific variables (example for the first challenge)
        if (typeof villagerName !== 'undefined' && typeof villagerAge !== 'undefined') {
            feedback.textContent = 'Success! You have created the variables correctly.';
            feedback.style.color = 'green';
            // Update XP and Level (simplified)
            updateUserProgress(10); // Award 10 XP for this challenge
        } else {
            feedback.textContent = 'Error: Make sure you define the required variables.';
            feedback.style.color = 'red';
        }
    } catch (e) {
        feedback.textContent = 'Error: ' + e.message;
        feedback.style.color = 'red';
    }
});

function updateUserProgress(xp) {
    const xpElement = document.getElementById('xp');
    const levelElement = document.getElementById('level');
    let currentXP = parseInt(xpElement.textContent.split(' ')[1]);
    let currentLevel = parseInt(levelElement.textContent.split(' ')[1]);
    
    currentXP += xp;
    
    if (currentXP >= 100) {
        currentXP = 0;
        currentLevel += 1;
    }
    
    xpElement.textContent = 'XP: ' + currentXP;
    levelElement.textContent = 'Level: ' + currentLevel;
}
