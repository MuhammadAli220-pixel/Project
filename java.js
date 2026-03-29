
const toggleSwitch = document.querySelector('#darkModeSwitch');
const body = document.body;

// Check saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if(toggleSwitch) toggleSwitch.checked = true;
    }
});

// Switch event listener
if(toggleSwitch) {
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}
