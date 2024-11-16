document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!validateUsername(username)) {
            alert('Логин должен содержать только латинские буквы и цифры.');
            return;
        }

        if (!validatePassword(password)) {
            alert('Пароль должен содержать минимум 8 символов, включая буквы и цифры.');
            return;
        }

        if (username && password) {
            alert('Вход выполнен!');
            // Перенаправление на другую страницу
            window.location.href = 'testTaro.html';
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });

    function validateUsername(username) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(username);
    }

    function validatePassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }
});