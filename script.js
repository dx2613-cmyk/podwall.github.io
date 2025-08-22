document.addEventListener('DOMContentLoaded', function() {
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
    const menuToggle = document.getElementById('menu-toggle');
    if (!menuToggle) return;

    menuToggle.addEventListener('click', function() {
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (mobileMenu) {
        mobileMenu.remove();
      } else {
        const newMenu = document.createElement('div');
        newMenu.className = 'mobile-menu md:hidden bg-white border-t border-gray-200 absolute left-0 right-0 z-50';
        newMenu.innerHTML = `
          <div class="px-4 py-3 space-y-2 bg-white shadow-lg">
            <a href="#services" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Услуги</a>
            <a href="#about" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">О нас</a>
            <a href="#contact" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Контакты</a>
          </div>
        `;
        
        const header = document.querySelector('header');
        header.style.position = 'relative';
        header.appendChild(newMenu);
      }
    });

    // Закрытие меню при клике на ссылку
    document.addEventListener('click', function(e) {
      if (e.target.matches('.mobile-menu a')) {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
          mobileMenu.remove();
        }
      }
    });
  }

  // Плавная прокрутка
  function initSmoothScroll() {
    // Прокрутка при клике на кнопку консультации
    const consultBtn = document.getElementById('consult-btn');
    if (consultBtn) {
      consultBtn.addEventListener('click', function() {
        scrollToSection('contact');
      });
    }

    // Прокрутка при клике на кнопки заказа
    document.addEventListener('click', function(e) {
      if (e.target.matches('.order-btn')) {
        const service = e.target.getAttribute('data-service');
        scrollToSection('contact');
        
        // Автозаполнение услуги в форме
        setTimeout(() => {
          const serviceSelect = document.getElementById('service');
          if (serviceSelect && service) {
            for (let option of serviceSelect.options) {
              if (option.value === service) {
                serviceSelect.value = service;
                break;
              }
            }
          }
        }, 500);
      }
    });

    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  }

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

  // Обработка формы
  function initForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
          value = '+7 ' + value;
          if (value.length > 4) value = value.substring(0, 4) + ' (' + value.substring(4);
          if (value.length > 8) value = value.substring(0, 8) + ') ' + value.substring(8);
          if (value.length > 13) value = value.substring(0, 13) + '-' + value.substring(13);
          if (value.length > 16) value = value.substring(0, 16) + '-' + value.substring(16);
        }
        e.target.value = value;
      });
    }

    // Отправка формы
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Показать индикатор загрузки
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <div class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Отправка...
        </div>
      `;

      // Имитация отправки (в реальном проекте здесь будет fetch/AJAX запрос)
      setTimeout(() => {
        // Успешная отправка
        showNotification('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        
        // Сброс формы
        contactForm.reset();
        
        // Восстановление кнопки
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }, 2000);
    });
  }

  // Показать уведомление
  function showNotification(message, type = 'success') {
    // Удалить предыдущие уведомления
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        ${message}
      </div>
    `;

    document.body.appendChild(notification);

    // Анимация появления
    setTimeout(() => {
      notification.classList.add('translate-x-0', 'opacity-100');
    }, 10);

    // Автоматическое скрытие
    setTimeout(() => {
      notification.classList.remove('translate-x-0', 'opacity-100');
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // Анимации при скролле
  function initAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Наблюдаем за секциями
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  // Инициализация всех функций
  function init() {
    renderServices();
    initMobileMenu();
    initSmoothScroll();
    initForm();
    initAnimations();
    
    console.log('PODWALL website initialized successfully!');
  }

  // Запуск инициализации
  init();
});
