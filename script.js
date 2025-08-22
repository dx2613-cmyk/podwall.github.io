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
    // ... остальные услуги (скопируйте из вашего App.jsx)
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

          <button class="md:hidden text-gray-700" id="menu-toggle">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Остальные секции (Hero, Services, About, Contact) -->
    <!-- Скопируйте их из вашего App.jsx, заменив JSX на HTML -->
    <!-- Например: -->
    <section class="py-20 px-4 sm:px-6 lg:px-8" id="services">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${services.map(service => `
            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="text-3xl mb-4">${service.icon}</div>
              <h3 class="text-xl font-bold">${service.title}</h3>
              <p class="text-blue-600 font-medium">${service.price}</p>
              <p class="text-gray-600 mt-2">${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Добавьте остальные секции -->
  `;

  // Обработчики событий
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden bg-white border-t border-gray-200';
    mobileMenu.innerHTML = `
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Услуги</a>
        <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-blue-600">О нас</a>
        <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Контакты</a>
      </div>
    `;
    document.querySelector('header').appendChild(mobileMenu);
  });
});
