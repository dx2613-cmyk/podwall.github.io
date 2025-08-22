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
    // ... остальные услуги
  ];

  // Генерация услуг
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
            <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-shadow order-btn">
              Заказать
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Обработчики событий
  const menuToggle = document.getElementById('menu-toggle');
  const consultBtn = document.getElementById('consult-btn');
  const contactForm = document.getElementById('contact-form');

  // Мобильное меню
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.remove();
      } else {
        const newMenu = document.createElement('div');
        newMenu.className = 'mobile-menu md:hidden bg-white border-t border-gray-200';
        newMenu.innerHTML = `
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Услуги</a>
            <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-blue-600">О нас</a>
            <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Контакты</a>
          </div>
        `;
        document.querySelector('header').appendChild(newMenu);
      }
    });
  }

  // Прокрутка к контактам
  if (consultBtn) {
    consultBtn.addEventListener('click', function() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Кнопки "Заказать" в услугах
  document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Отправка формы
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button[type="submit"]');
      
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

      // Имитация отправки
      setTimeout(() => {
        submitBtn.innerHTML = 'Отправлено!';
        contactForm.reset();
        setTimeout(() => {
          submitBtn.innerHTML = 'Отправить заявку';
          submitBtn.disabled = false;
        }, 2000);
      }, 2000);
    });
  }
});
