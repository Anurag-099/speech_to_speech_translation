// Add custom behavior after video playback ends
// You can trigger alerts, load next steps, or perform other actions here

document.querySelector('video').addEventListener('ended', function() {
    alert('Video playback has completed!');
    // Include additional actions if needed
});

