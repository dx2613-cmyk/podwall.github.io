document.addEventListener('DOMContentLoaded', function() {
  const app = document.getElementById('app');
  
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

  // Генерация HTML
  app.innerHTML = `
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">PODWALL</h1>
              <p class="text-sm text-gray-600">Сервисный центр</p>
            </div>
          </div>
          
          <nav class="hidden md:flex space-x-8">
            <a href="#services" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Услуги</a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">О нас</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Контакты</a>
          </nav>

          <button 
            class="md:hidden text-gray-700 focus:outline-none" 
            id="menu-toggle"
            aria-label="Открыть меню"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Мобильное меню -->
      <div 
        id="mobile-menu" 
        class="hidden md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Услуги</a>
          <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">О нас</a>
          <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Контакты</a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="max-w-7xl mx-auto relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Профессиональный <span class="text-blue-600">ремонт</span> электроники
            </h1>
            <p class="text-xl text-gray-700 mb-8 leading-relaxed">
              Сервисный центр PODWALL — профессиональный ремонт и обслуживание компьютеров, телефонов, оргтехники, мониторов. Заправка картриджей.
            </p>
            
            <div class="flex flex-wrap gap-4 mb-8">
              <div class="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                Гарантия качества
              </div>
              <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                Быстрый ремонт
              </div>
              <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                Опытные мастера
              </div>
            </div>

            <button 
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              id="consult-btn"
              aria-label="Заказать консультацию"
            >
              Заказать консультацию
            </button>
          </div>

          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div class="grid grid-cols-2 gap-6">
                ${services.slice(0, 4).map(service => `
                  <div class="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                    <div class="text-3xl mb-2" aria-hidden="true">${service.icon}</div>
                    <h3 class="font-semibold text-gray-900 text-sm">${service.title}</h3>
                    <p class="text-blue-600 font-medium text-sm">${service.price}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий спектр услуг по ремонту и обслуживанию электронной техники
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${services.map(service => `
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div class="p-8">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-white text-2xl" aria-hidden="true">${service.icon}</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">${service.title}</h3>
                </div>
                
                <p class="text-gray-600 mb-6 leading-relaxed">${service.description}</p>
                
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-bold text-blue-600">${service.price}</span>
                  <button 
                    class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 order-btn"
                    data-service="${service.title}"
                    aria-label="Заказать ${service.title}"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают <span class="text-blue-600">именно нас</span>
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Профессиональная команда</h3>
                  <p class="text-gray-600">Наши мастера имеют большой опыт работы и постоянно повышают свою квалификацию</p>
                </div>
              </div>

              ${[
                'Оригинальные запчасти',
                'Быстрые сроки',
                'Гарантия на работы'
              ].map(item => `
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${item}</h3>
                    <p class="text-gray-600">${item === 'Оригинальные запчасти' 
                      ? 'Используем только качественные комплектующие' 
                      : item === 'Быстрые сроки' 
                        ? 'Оперативно выполняем ремонт без потери качества' 
                        : 'Предоставляем гарантию на все выполненные работы'}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://placehold.co/500x400/e2e8f0/64748b?text=Сервисный+центр" 
                alt="Сервисный центр PODWALL"
                class="w-full h-64 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <div class="space-y-4">
                ${[
                  'Работаем с 2010 года',
                  'Более 1000 довольных клиентов',
                  'Среднее время ремонта - 2 часа'
                ].map(text => `
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="text-gray-700">${text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Свяжитесь с нами
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Оставьте заявку и наш специалист свяжется с вами в ближайшее время
            </p>

            <div class="space-y-6">
              ${[
                {
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                  title: 'Адрес',
                  text: 'г. Новосибирск, ул. Театральная 4/1'
                },
                {
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                  title: 'График работы',
                  text: 'Пн–Сб: 09:00–20:00<br>Вс: выходной'
                },
                {
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  title: 'Телефон',
                  text: '<a href="tel:+79529096909" class="hover:text-blue-600">+7 952 909-69-09</a>'
                },
                {
                  icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  title: 'Email',
                  text: '<a href="mailto:ceis.ooo@yandex.ru" class="hover:text-blue-600">ceis.ooo@yandex.ru</a>'
                }
              ].map(item => `
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${item.icon}"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900">${item.title}</h3>
                    <p class="text-gray-600">${item.text}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Закажите обратный звонок</h3>
            
            <form id="contact-form" class="space-y-6" method="POST" action="https://formsubmit.co/ceis.ooo@yandex.ru">
              <input type="hidden" name="_subject" value="Новая заявка с сайта PODWALL">
              <input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
              <input type="hidden" name="_captcha" value="false">
              
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  Услуга
                </label>
                <select
                  id="service"
                  name="service"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Выберите услугу</option>
                  ${services.map(service => `
                    <option value="${service.title}">
                      ${service.title} - ${service.price}
                    </option>
                  `).join('')}
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Опишите вашу проблему..."
                ></textarea>
              </div>

              <button
                type="submit"
                id="submit-btn"
                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 class="text-xl font-bold">PODWALL</h3>
                <p class="text-gray-400 text-sm">Сервисный центр</p>
              </div>
            </div>
            <p class="text-gray-400 leading-relaxed">
              Профессиональный ремонт и обслуживание компьютеров, телефонов, оргтехники, мониторов. Заправка картриджей.
            </p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Контакты</h4>
            <div class="space-y-2 text-gray-400">
              <p>г. Новосибирск, ул. Театральная 4/1</p>
              <p>Пн–Сб: 09:00–20:00</p>
              <p>Вс: выходной</p>
              <p><a href="tel:+79529096909" class="hover:text-blue-400">+7 952 909-69-09</a></p>
              <p><a href="mailto:ceis.ooo@yandex.ru" class="hover:text-blue-400">ceis.ooo@yandex.ru</a></p>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Режим работы</h4>
            <div class="space-y-2 text-gray-400">
              ${[
                'Понедельник: 09:00–20:00',
                'Вторник: 09:00–20:00',
                'Среда: 09:00–20:00',
                'Четверг: 09:00–20:00',
                'Пятница: 09:00–20:00',
                'Суббота: 11:00–16:00',
                'Воскресенье: Выходной'
              ].map(item => `
                <p><span class="text-white">${item.split(':')[0]}:</span> ${item.split(':')[1]}</p>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; ${new Date().getFullYear()} Сервисный центр PODWALL (ООО «ЦЭИС»). Все права защищены.</p>
        </div>
      </div>
    </footer>
  `;

  // Обработчики событий
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const consultBtn = document.getElementById('consult-btn');
  const orderButtons = document.querySelectorAll('.order-btn');
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  // Мобильное меню
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    // Прокрутка страницы при открытом меню
    if (!mobileMenu.classList.contains('hidden')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Закрытие меню при клике на ссылку
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Прокрутка к контактам
  consultBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  });

  // Кнопки "Заказать" в услугах
  orderButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const service = this.getAttribute('data-service');
      if (service) {
        const select = document.getElementById('service');
        select.value = service;
      }
      document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Отправка формы
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Валидация формы
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (!name || !phone) {
      alert('Пожалуйста, заполните обязательные поля');
      return;
    }
    
    // Блокировка кнопки
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
    
    try {
      // Имитация отправки (в реальном проекте используйте fetch)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Успешная отправка
      submitBtn.innerHTML = 'Отправлено!';
      contactForm.reset();
      
      // Перенаправление на страницу благодарности (если настроено)
      // window.location.href = 'thanks.html';
      
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      submitBtn.innerHTML = 'Ошибка отправки';
    } finally {
      setTimeout(() => {
        submitBtn.innerHTML = 'Отправить заявку';
        submitBtn.disabled = false;
      }, 3000);
    }
  });
});
