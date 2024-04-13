// Получаем элементы формы авторизации
const authBtn = document.getElementById("authBtn");
const modal = document.getElementById("authModal");
const closeBtn = document.querySelector("#authModal .close");
const loginForm = document.getElementById("loginForm");
const notification = document.getElementById("notification");
const loginMessage = document.getElementById("loginMessage");

// Открываем модальное окно при нажатии на кнопку "Авторизация"
authBtn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на кнопку закрытия
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Обработка отправки формы авторизации
loginForm.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const loginInput = document.getElementById("loginInput").value;
    const passwordInput = document.getElementById("passwordInput").value;

    // Проверяем логин и пароль
    if (loginInput === "Rigich" && passwordInput === "123123") {
        notification.textContent = "Успешная авторизация";
        // Перенаправляем пользователя на fish.html
        window.location.href = "fish.html";
    } else {
        loginMessage.textContent = "Пароль или логин неверный";
    }

    // Очищаем поля ввода
    loginForm.reset();
}

// Получаем элементы формы обмена
const exchangeBtn = document.getElementById("exchangeBtn");
const exchangeModal = document.getElementById("exchangeModal");
const closeExchangeBtn = document.querySelector("#exchangeModal .close");
const exchangeForm = document.getElementById("exchangeForm");

// Открываем модальное окно при нажатии на кнопку "Обменять"
exchangeBtn.onclick = function() {
    exchangeModal.style.display = "block";
}

// Закрываем модальное окно при нажатии на кнопку закрытия
closeExchangeBtn.onclick = function() {
    exchangeModal.style.display = "none";
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == exchangeModal) {
        exchangeModal.style.display = "none";
    }
}

// Обработка отправки формы обмена
exchangeForm.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей формы
    const cups = document.getElementById("cups").value;
    const legendaries = document.getElementById("legendaries").value;
    const exchangeTo = document.getElementById("exchangeTo").value;
    const username = document.getElementById("username").value;

    // Отправляем данные на сервер или выполняем другие действия по обмену
    window.location.href = "obmen/obmen.html";
    // Закрываем модальное окно после отправки формы
    exchangeModal.style.display = "none";
}


