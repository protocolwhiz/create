document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        "not suck",
        "kinda...fun",
        "actually stick",
    ];

    let currentPhraseIndex = 0;
    let dynamicText = document.getElementById('dynamicText');
    let cursor = document.createElement('span');
    cursor.classList.add('cursor');
    dynamicText.appendChild(cursor);
    let cursorPosition = 0;
    let direction = 'right';
    let waitTime = 2000; // Adjust wait time in milliseconds (2 seconds)

    function updateText() {
        let currentPhrase = phrases[currentPhraseIndex];
        dynamicText.textContent = currentPhrase.substring(0, cursorPosition) + ' ';
        dynamicText.appendChild(cursor);

        if (cursorPosition === currentPhrase.length) {
            // After displaying the full phrase, wait before changing direction
            setTimeout(() => {
                direction = 'left';
            }, waitTime);
        } else if (cursorPosition === 0) {
            direction = 'right';
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }

        cursorPosition += direction === 'right' ? 1 : -1;
    }

    setInterval(updateText, 120); // Adjust interval as needed for animation speed
});
