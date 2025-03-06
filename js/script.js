document.addEventListener('DOMContentLoaded', () => {
  const Telegram = window.Telegram;
  if (Telegram && Telegram.WebApp) {
    const webApp = Telegram.WebApp;
    webApp.ready(); // Инициализация мини-приложения

    // Получение данных пользователя
    const user = webApp.initDataUnsafe.user;
    if (user) {
      document.querySelector('header h1').textContent += `, ${user.first_name}!`;
    }

    // Анимация кнопок
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
      });
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
      });
    });
  }
});
