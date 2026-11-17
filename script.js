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
                    // Скрываем сообщение через 5 секунд
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });
    }

});
    const g = document.getElementById('greeting');
    const btn = document.getElementById('askName');

    // Функция показывает приветствие
    function showGreeting(name) {
      g.textContent = name
        ? `Привет, ${name}!`
        : 'Добро пожаловать!';
    }

    // Функция спрашивает имя
    function askName() {
      const name = prompt('Как тебя зовут?');
      if (name) {
        localStorage.setItem('visitorName', name);
      } else {
        localStorage.removeItem('visitorName');
      }
      showGreeting(localStorage.getItem('visitorName'));
    }

    // Когда нажимаем кнопку — спрашиваем имя
    btn.addEventListener('click', askName);

    // Если имя уже сохранено — показываем сразу
    showGreeting(localStorage.getItem('visitorName'));

    // Плавная прокрутка без подсветки активного пункта
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', id);
  });
});

// При открытии страницы с хэшем (#about) — плавно скроллим к секции
window.addEventListener('load', () => {
  const { hash } = window.location;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
 // Scroll To Top
function setupScrollTop() {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "back-to-top";
    button.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    button.setAttribute("aria-label", "Вернуться наверх");

    document.body.appendChild(button);

    function updateButton() {
        button.hidden = window.scrollY < 300;
    }

    window.addEventListener("scroll", updateButton);

    button.addEventListener("click", function () {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reducedMotion ? "auto" : "smooth"
        });
    });

    updateButton();
}

setupScrollTop();
// Dark / Light Theme
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('i');

// Загружаем сохранённую тему
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

function updateThemeIcon() {
    if (themeIcon) {
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

updateThemeIcon();

// Меняем тему при нажатии
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        const currentTheme = document.body.classList.contains('dark-theme')
            ? 'dark'
            : 'light';

        localStorage.setItem('theme', currentTheme);

        updateThemeIcon();
    });
}
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        const target = document.querySelector(id);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        history.pushState(null, '', id);
    });
});


   
