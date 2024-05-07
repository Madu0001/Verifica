const toggleModeButton = document.getElementById('toggleMode');
const bodyElement = document.body;

toggleModeButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
});
