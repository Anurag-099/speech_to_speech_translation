// Show tooltip when file input is focused
const fileInput = document.getElementById('video_file');
const tooltip = document.getElementById('file-tooltip');

fileInput.addEventListener('focus', () => {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
});

fileInput.addEventListener('blur', () => {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
});

// Simulate progress bar while submitting the form
const form = document.querySelector('form');
const progressBar = document.querySelector('.progress');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    progressBar.style.width = '0%';
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += 5;
            progressBar.style.width = width + '%';
        }
    }, 100);
    // Form submission continues after progress simulation
});
