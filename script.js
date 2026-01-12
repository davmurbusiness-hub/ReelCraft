// Инициализация видео-превью
document.querySelectorAll('.template-preview video').forEach(video => {
    video.addEventListener('mouseover', () => video.play());
    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
    });
});

// Категории
let counterOfCat = 0;
document.addEventListener("DOMContentLoaded", function () {
    const categoriesContainer = document.querySelector('.categories');
    const templateCards = document.querySelectorAll('.template-card');

    categoriesContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.category-btn');
        if (!button) return;

        // Удаляем active у всех кнопок
        if (button === document.getElementById("all_cat_but")) {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            counterOfCat = 0;
        }
        else {
            document.getElementById("all_cat_but").classList.remove('active');
            if (button.classList.contains('active')) {
                if (counterOfCat > 1) {
                    button.classList.remove('active');
                    counterOfCat -= 1;
                }
            }
            else {
                button.classList.add('active');
                counterOfCat += 1;
            }
        }

        const selectedCategories = getSelectedCategories();

        // Фильтруем карточки
        filterTemplates(selectedCategories);
    });

    function getSelectedCategories() {
        const activeButtons = document.querySelectorAll('.category-btn.active');
        return Array.from(activeButtons).map(btn => btn.dataset.category);
    }

    function filterTemplates(selectedCategories) {
        templateCards.forEach(card => {
            const cardCategory = card.dataset.category;

            // Показываем карточку если:
            // 1. Выбрана категория "all" (если есть активная кнопка "all")
            // 2. Или если категория карточки есть в выбранных категориях
            if (selectedCategories.includes('all') || selectedCategories.includes(cardCategory)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Инициализация - показываем все карточки
    filterTemplates(['all']);
});