document.addEventListener("DOMContentLoaded", function () {
    const rightSplit = document.getElementById('rightSplit');
    const videoContainer = document.getElementById("video");

    const rainData = [
        {
            "ID": "section1",
            "Type": "video",
            "Video": "Rain.mp4",
        }
    ];

    let currentVideoIndex = 0;

    function showVideo(index) {
        const videoElement = document.createElement("video");
        videoElement.src = rainData[index].Video;
        videoElement.controls = true;
        videoElement.type = "video/mp4";
        videoContainer.innerHTML = "";
        videoContainer.appendChild(videoElement);
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % rainData.length;
        showVideo(currentVideoIndex);
    }

    function previousVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + rainData.length) % rainData.length;
        showVideo(currentVideoIndex);
    }

// Show the initial video
    showVideo(currentVideoIndex);
});
