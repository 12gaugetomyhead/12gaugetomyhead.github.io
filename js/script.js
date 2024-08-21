document.addEventListener('DOMContentLoaded', () => {
    const enterText = document.getElementById('enter-text');
    const backgroundMusic = document.getElementById('background-music');

    if (enterText) {
        enterText.addEventListener('click', () => {
            document.body.style.transition = 'background-color 0.5s ease'; // Smooth transition
            document.body.style.backgroundColor = 'black'; // Change background to black
            document.body.style.margin = '0'; // Remove any margin
            document.body.style.padding = '0'; // Remove any padding
            document.body.style.overflow = 'hidden'; // Hide scrollbars

            // Create and append a full-screen overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.backgroundColor = 'black';
            overlay.style.color = 'white';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '1000'; // Ensure it's above other content
            overlay.innerHTML = '<h1>Black Screen</h1>';

            document.body.innerHTML = ''; // Clear the existing content
            document.body.appendChild(overlay); // Add the overlay to the body

            // Play the background music
            backgroundMusic.play().catch(error => {
                console.error('Error playing the audio:', error);
            });
        });
    } else {
        console.error('Element with id "enter-text" not found.');
    }
});
