const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});