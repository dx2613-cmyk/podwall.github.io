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
    },
    {
      id: 6,
      title: 'Продажа восстановленной техники',
      price: 'от 5000 ₽',
      description: 'Продажа проверенной и восстановленной техники с гарантией. Принтеры, мониторы, планшеты по выгодным ценам.',
      icon: '🔄'
    }
  ];

  // Генерация карточек услуг
  function renderServices() {
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
      servicesContainer.innerHTML = services.map(service => `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between h-full">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white text-lg">${service.icon}</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">${service.title}</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              ${service.description}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-blue-600 font-bold">${service.price}</span>
            <button class="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors order-btn" data-service="${service.title}">
              Заказать
            </button>
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
