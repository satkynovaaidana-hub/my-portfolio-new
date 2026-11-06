document.addEventListener('DOMContentLoaded', () => {// запускает и выполняет функцию 
    
    const mobileMenuToggle = document.getElementById('mobile-menu');// Находим кнопку меню
    const navLinks = document.querySelector('.nav-links');// Находим ссылки меню

    if (mobileMenuToggle) {// Проверяем наличие кнопки
        mobileMenuToggle.addEventListener('click', () => {// Открываем меню при нажатии
            navLinks.classList.toggle('active');// Меняем видимость меню
            const icon = mobileMenuToggle.querySelector('i');// Находим иконку
            if (navLinks.classList.contains('active')) {// Меняем иконку меню
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
    document.querySelectorAll('.nav-links a').forEach(link => {// Находим все ссылки меню
        link.addEventListener('click', () => {// Закрываем меню после нажатия
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle?.querySelector('i');// Возвращаем иконку меню
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
    const contactForm = document.getElementById('contact-form-element');// Находим контактную форму
    const successMsg = document.getElementById('form-success-msg');// Находим сообщение об успехе

    if (contactForm) {// Проверяем наличие формы
        contactForm.addEventListener('submit', (e) => {// Обрабатываем отправку формы
            e.preventDefault();
            const name = document.getElementById('form-name').value;

            if (name) {
                 // Показываем сообщение
                successMsg.style.display = 'block';
                contactForm.reset();// Очищаем поля формы

                setTimeout(() => {
                    / Скрываем сообщение через 5 секунд
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });
    }

});
