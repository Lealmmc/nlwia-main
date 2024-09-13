// JS
import "./form.js"

// CSS
import "./styles/base.css"
import "./styles/app.css"
import "./styles/form.css"
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleMode');
  const body = document.body;

  // Verifica se o modo claro está ativo e ajusta o botão e o tema
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggleButton.classList.add('active');
  } else {
    body.classList.remove('light-mode');
    toggleButton.classList.remove('active');
  }

  // Adiciona um listener para alternar entre os modos
  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      toggleButton.classList.remove('active');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add('light-mode');
      toggleButton.classList.add('active');
      localStorage.setItem('theme', 'light');
    }
  });
});
