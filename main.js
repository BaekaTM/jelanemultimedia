function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
}

function updateIcon(theme) {
    const icon = document.getElementById('themeIcon');
    icon.textContent = theme === 'dark' ? '🌙' : '🌞';
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
});

// Chargement des images nommées "photo1.jpg" à "photo10.jpg" par exemple
const container = document.querySelector('.galerie-photos');
const totalImages = 6; // Modifie ce nombre selon ce que tu as

for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `./mes-photos/photo${i}.jpg`;
    img.alt = `Photo ${i}`;
    container.appendChild(img);
}