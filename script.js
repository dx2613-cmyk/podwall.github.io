document.addEventListener('DOMContentLoaded', function () {
  const services = [
    { id: 1, title: 'Ремонт компьютеров', price: 'от 1000 ₽', description: 'Диагностика, апгрейд, замена комплектующих, установка Windows, восстановление данных, установка ПО.', icon: '💻' },
    { id: 2, title: 'Ремонт телефонов', price: 'от 800 ₽', description: 'Замена дисплеев, батарей, кнопок, прошивка. Работы с Android и iPhone.', icon: '📱' },
    { id: 3, title: 'Ремонт оргтехники', price: 'от 900 ₽', description: 'Ремонт МФУ, сканеров, лазерных и струйных принтеров.', icon: '🖨️' },
    { id: 4, title: 'Ремонт мониторов', price: 'от 1000 ₽', description: 'Диагностика, замена матрицы, платы, ремонт инверторов.', icon: '🖥️' },
    { id: 5, title: 'Заправка картриджей', price: 'от 400 ₽', description: 'Заправка и восстановление картриджей лазерных и струйных принтеров.', icon: '🖨️' }
  ];

  function renderServices() {
    const container = document.getElementById('services-container');
    if (container) {
      container.innerHTML = services.map(s => `
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div class="p-8">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <span class="text-white text-2xl">${s.icon}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">${s.title}</h3>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed">${s.description}</p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-blue-600">${s.price}</span>
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-shadow order-btn" data-service="${s.title}">
                Заказать
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

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
            <a href="#about" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">О нас</a>
            <a href="#contact" class="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Контакты</a>
          </div>
        `;
        document.querySelector('header').appendChild(newMenu);
        mobileMenuOpen = true;
      }
    });
  }

  function initClickDelegation() {
    document.addEventListener('click', e => {
      if (e.target.matches('.mobile-menu a')) {
        const menu = document.querySelector('.mobile-menu');
        menu?.remove();
        mobileMenuOpen = false;
      }
    });
  }

  function initSmoothScroll() {
    const consultBtn = document.getElementById('consult-btn');
    if (consultBtn) {
      consultBtn.addEventListener('click', () => scrollToSection('contact'));
    }

    document.addEventListener('click', e => {
      if (e.target.matches('.order-btn')) {
        const service = e.target.getAttribute('data-service');
        scrollToSection('contact');
        const select = document.getElementById('service');
        if (select && service) select.value = service;
      }
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const id = e.target.getAttribute('href').substring(1);
        scrollToSection(id);
      });
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  }

  function validatePhone(phone) {
    return phone.replace(/\D/g, '').length >= 10;
  }

  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      const phone = document.getElementById('phone');
      const name = document.getElementById('name');
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      if (!name.value.trim()) {
        e.preventDefault();
        showNotification('Введите имя', 'error');
        name.focus();
        return;
      }

      if (!validatePhone(phone.value)) {
        e.preventDefault();
        showNotification('Введите корректный номер', 'error');
        phone.focus();
        return;
      }

      btn.disabled = true;
      btn.innerHTML = `<div class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Отправка...</div>`;

      setTimeout(() => {
        showNotification('Заявка отправлена!', 'success');
        form.reset();
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 2000);
      }, 1000);
    });
  }

  function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notification');
    existing?.remove();

    const notif = document.createElement('div');
    notif.className = `notification fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`;
    notif.innerHTML = `<div class="flex items-center" role="alert"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${message}</div>`;
    document.body.appendChild(notif);

    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 300);
    }, 5000);
  }

  let observer = null;

  function initAnimations() {
    if (observer) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('animate-fade-in'));
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('section').forEach(el => observer.observe(el));
  }

  function init() {
    renderServices();
    initMobileMenu();
    initClickDelegation();
    initSmoothScroll();
    initForm();
    initAnimations();
    console.log('PODWALL website initialized successfully!');
  }

  init();
});
