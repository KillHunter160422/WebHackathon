document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards');
    const cardWidth = 100;
    const cardHeight = 150;
    const containerWidth = cardsContainer.offsetWidth;
    const containerHeight = cardsContainer.offsetHeight;

    // Массив с путями к изображениям лицевой стороны карт Таро
    const cardFrontImages = [
        '',
        // Добавить изображения лицевых сторон карт
    ];

    // Создаем 22 карты
    for (let i = 0; i < 22; i++) {
        const card = document.createElement('div');
        card.classList.add('card', 'card-back');
        card.style.left = `${Math.random() * (containerWidth - cardWidth)}px`;
        card.style.top = `${Math.random() * (containerHeight - cardHeight)}px`;

        card.addEventListener('click', function() {
            // Меняем класс для рандом отображения
            card.classList.remove('card-back');
            card.classList.add('card-front');
            card.style.backgroundImage = `url(${cardFrontImages[i]})`;
        });

        cardsContainer.appendChild(card);
    }
});