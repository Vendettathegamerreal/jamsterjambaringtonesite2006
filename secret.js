document.addEventListener('DOMContentLoaded', () => {
    // Array of background image URLs
    const backgroundImages = [
        './storage/jcw/images/KalaGraduation.png',
        './storage/jcw/images/KalaGraduation.png',
        './storage/jcw/images/KalaGraduation.png',
        './storage/jcw/images/KalaGraduation.png',
        './storage/jcw/images/KalaGraduation.png'
    ];

    let currentIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % backgroundImages.length;
    }

    // Set the initial background image
    changeBackgroundImage();

    // Change background image every 1 second (1000 milliseconds)
    setInterval(changeBackgroundImage, 1000);

    // Play the background sound
    const backgroundSound = document.getElementById('background-sound');
    backgroundSound.play();
});