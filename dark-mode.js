const darkMode = document.getElementById('toggle');
const body = document.querySelector('html');
const x = document.querySelector('span');

function toggleDarkMode() {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        document.getElementById('toggle').innerHTML = "LHT";
    } else {
        document.getElementById('toggle').innerHTML = "DRK";
    }
    saveData();
}

function saveData() {
    localStorage.setItem('theme', body.classList.contains('dark'));
}

function showTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'true') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}

showTheme();