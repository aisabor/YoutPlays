document.addEventListener("DOMContentLoaded", function () {
    const spinButton = document.getElementById("spinButton");
    const spinAgainButton = document.getElementById("spinAgain");
    const playerOneButton = document.getElementById("playerOneButton");
    const playerTwoButton = document.getElementById("playerTwoButton");
    const videoFrame = document.getElementById('spinAgainVideoFrame');
    const countdown = document.getElementById("spinAgainCountdown");
    const messageDisplay = document.getElementById("spinAgainMessageDisplay");
    const messageElement = document.getElementById("message");
    
    const videos = [
        "./media/gams.mp4",
        "./media/gamss.mp4",
        "./media/mick.mp4"
    ];

    let previousVideoIndex = -1;

    function getRandomVideo() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * videos.length);
        } while (randomIndex === previousVideoIndex);

        previousVideoIndex = randomIndex;
        return videos[randomIndex];
    }

    function displayRandomVideo() {
        const selectedVideo = getRandomVideo();
        videoFrame.src = selectedVideo;
        messageElement.textContent = "";  
    }

    function startCountdown() {
        let count = 3;
        const countdownInterval = setInterval(() => {
            if (count === 0) {
                clearInterval(countdownInterval);
                displayRandomVideo();
                spinAgainButton.disabled = false;
            } else {
                countdown.textContent = `Next video in ${count} seconds...`;
                count--;
            }
        }, 1000);
    }

    spinButton.addEventListener("click", function () {
        spinButton.disabled = true;
        startCountdown();
    });

    playerOneButton.addEventListener("click", function () {
        messageDisplay.textContent = "Player 1 Wins!";
    });

    playerTwoButton.addEventListener("click", function () {
        messageDisplay.textContent = "Player 2 Wins!";
    });

    spinAgainButton.addEventListener("click", function () {
        spinAgainButton.disabled = true;
        startCountdown();
    });

    const video = document.getElementById('spinAgainVideoFrame');
    const alertTime = 5; 
    let alertShown = false;

    video.addEventListener('timeupdate', function () {
        const currentTime = Math.round(video.currentTime);

        if (currentTime >= alertTime && !alertShown) {
            alertShown = true; 
            messageElement.textContent = 'The video has reached 5 seconds!';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const enterGameButtons = document.querySelectorAll(".enterGameButton");

    enterGameButtons.forEach(button => {
        button.addEventListener("click", function () {
            
            button.disabled = true;

            let count = 3;
            const countdownInterval = setInterval(() => {
                if (count === 0) {
                    clearInterval(countdownInterval);
                  
                    window.location.href = "game.html";
                } else {
                    button.textContent = `Loading Youtplays in ${count} seconds...`;
                    count--;
                }
            }, 1000);
        });
    });
});
