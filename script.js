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
  let mobileMenuOpen = false;

  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      if (menu) {
        menu.remove();
        mobileMenuOpen = false;
      } else {
        const newMenu = document.createElement('div');
        newMenu.className = 'mobile-menu md:hidden bg-white border-t border-gray-200 absolute left-0 right-0 top-full z-50 shadow-lg';
        newMenu.innerHTML = `
          <div class="px-4 py-3 space-y-2 bg-white">
            <a href="#services" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Услуги</a>
            <a href="#tradein" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Выкуп и Trade-in</a>
            <a href="#about" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">О нас</a>
            <a href="#contact" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Контакты</a>
          </div>
        `;
        document.querySelector('header').appendChild(newMenu);
        mobileMenuOpen = true;
      }
    });
  }

  // Плавная прокрутка
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
        
        // Ждём, пока форма загрузится
        setTimeout(() => {
          const select = document.getElementById('service');
          if (select && service) select.value = service;
        }, 200);
      }
    });

    // Кнопка "Оценить мою технику"
    document.getElementById('tradein-btn')?.addEventListener('click', () => {
      scrollToSection('contact');
      
      // Через 500 мс (после прокрутки) пытаемся выбрать "Выкуп или Trade-in"
      setTimeout(() => {
        const select = document.getElementById('service');
        if (select) {
          // Попробуем найти вариант с таким текстом
          for (let option of select.options) {
            if (option.text.includes('выкуп') || option.text.includes('Trade-in') || option.text.includes('trade-in')) {
              select.value = option.value;
              break;
            }
          }
        }
      }, 500);
    });

    // Плавная прокрутка по ссылкам
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  }

  // Делегирование кликов (для мобильного меню)
  function initClickDelegation() {
    document.addEventListener('click', e => {
      if (e.target.matches('.mobile-menu a')) {
        const menu = document.querySelector('.mobile-menu');
        menu?.remove();
      }
    });
  }

  // Анимации при скролле
  let observer = null;

  function initAnimations() {
    if (observer) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    initClickDelegation();
    initClickHandlers();
    initAnimations();
    console.log('PODWALL website initialized successfully!');
  }

  init();
});
