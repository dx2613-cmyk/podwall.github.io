document.addEventListener('DOMContentLoaded', function () {
  // Данные услуг
  const services = [
    {
      id: 1,
      title: 'Ремонт компьютеров',
      price: 'от 1000 ₽',
      description: 'Диагностика, апгрейд, замена комплектующих, установка Windows, восстановление данных, установка ПО.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Ремонт телефонов',
      price: 'от 800 ₽',
      description: 'Замена дисплеев, батарей, кнопок, прошивка. Работы с Android и iPhone.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'Ремонт оргтехники',
      price: 'от 900 ₽',
      description: 'Ремонт МФУ, сканеров, лазерных и струйных принтеров.',
      icon: '🖨️'
    },
    {
      id: 4,
      title: 'Ремонт мониторов',
      price: 'от 1000 ₽',
      description: 'Диагностика, замена матрицы, платы, ремонт инверторов.',
      icon: '🖥️'
    },
    {
      id: 5,
      title: 'Заправка картриджей',
      price: 'от 400 ₽',
      description: 'Заправка и восстановление картриджей лазерных и струйных принтеров.',
      icon: '🖨️'
    }
  ];

  // Генерация карточек услуг
  function renderServices() {
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
      servicesContainer.innerHTML = services.map(service => `
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div class="p-8">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <span class="text-white text-2xl">${service.icon}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">${service.title}</h3>
            </div>
            
            <p class="text-gray-600 mb-6 leading-relaxed">${service.description}</p>
            
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-blue-600">${service.price}</span>
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-shadow order-btn" data-service="${service.title}">
                Заказать
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Инициализация мобильного меню
  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Закрытие меню при клике на ссылку
    menu.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }

  // Плавная прокрутка
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Обработка кликов
  function initClickHandlers() {
    // Кнопка "Заказать консультацию"
    document.getElementById('consult-btn')?.addEventListener('click', () => {
      scrollToSection('contact');
    });

    // Кнопки "Заказать" в услугах
    document.addEventListener('click', e => {
      if (e.target.matches('.order-btn')) {
        const service = e.target.getAttribute('data-service');
        scrollToSection('contact');
        
        // Через 300 мс пытаемся выбрать услугу
        setTimeout(() => {
          const select = document.getElementById('service');
          if (select && service) {
            // Пытаемся найти и выбрать нужный option
            for (let option of select.options) {
              if (option.value === service || option.text === service) {
                select.value = option.value;
                break;
              }
            }
          }
        }, 300);
      }
    });

    // Кнопка "Оценить мою технику"
    document.getElementById('tradein-btn')?.addEventListener('click', () => {
      scrollToSection('contact');
      
      // Через 500 мс после прокрутки выбираем "Выкуп или Trade-in"
      setTimeout(() => {
        const select = document.getElementById('service');
        if (select) {
          for (let option of select.options) {
            if (
              option.text.toLowerCase().includes('выкуп') || 
              option.text.toLowerCase().includes('trade-in') ||
              option.text.toLowerCase().includes('выкуп или trade-in')
            ) {
              select.value = option.value;
              break;
            }
          }
        }
      }, 500);
    });

    // Плавная прокрутка по ссылкам в навигации
    document.querySelectorAll('a[href^="#"]:not(.order-btn)').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  }

  // Анимации при скролле
  let observer = null;

  function initAnimations() {
    if (observer) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate-fade-in')) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  // Инициализация
  function init() {
    renderServices();
    initMobileMenu();
    initClickHandlers();
    initAnimations();
    console.log('PODWALL website initialized successfully!');
  }

  init();
});
