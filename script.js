// Инициализация видео-превью
document.querySelectorAll('.template-preview video').forEach(video => {
    video.addEventListener('mouseover', () => video.play());
    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
    });
});



//Категории
let counterOfCat = 0;
document.addEventListener("DOMContentLoaded", function () {
    const categoriesContainer = document.querySelector('.categories');

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
                    counterOfCat -= 1 ; 
                }                              
            }
            else{
                button.classList.add('active');
                counterOfCat += 1;
            
            }
            

        }

        

        const category = button.dataset.category;

    // Загружаем контент для категории
        loadCategoryContent(category);
    });

    function loadCategoryContent(category) {
        console.log(`Загружаем категорию: ${category}`);
    // Здесь можно фильтровать или загружать контент
    }
});