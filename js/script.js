document.addEventListener('DOMContentLoaded', () => {
    const enterText = document.getElementById('enter-text');

    enterText.addEventListener('click', () => {
        document.body.style.transition = 'background-color 0.5s ease'; // Smooth transition
        document.body.style.backgroundColor = 'black'; // Change background to black
        document.body.innerHTML = '<h1 style="color: white; text-align: center; margin-top: 20%;">Black Screen</h1>'; // Display a message
    });
});

