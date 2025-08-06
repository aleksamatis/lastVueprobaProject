<script lang="ts" setup>
import Logo from '../assets/Logo.svg'
import majesticons_arrow from '../assets/majesticons_arrow.svg'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <header class="header">
    <img src="@/assets/background.png" alt="Background" class="header-background" />
    <div class="menu">
      <div class="menu-backdrop"></div>
      <div class="menu-container container">
        <div class="flex">
          <img :src="Logo" alt="Логотип" class="logo" />
          <!-- Передаем isOpen и слушаем событие toggle-menu -->
          <Menu />
        </div>
        <!-- Десктопная кнопка Заказать -->
        <button class="menu-btn desktop-only">Заказать</button>
      </div>
    </div>
    <div class="container">
      <div class="header-item">
        <div class="text-logo">EN SOFT</div>
        <div>
          Текст-рыба получите доступ к встроенным продуктам для настройки аппаратной конфигурации и
          создания прикладных программ
        </div>
      </div>
    </div>
    <a class="about-us-link" href="#about">
      <div>О нас</div>
      <img :src="majesticons_arrow" class="cut-element-arrow" />
    </a>
  </header>
</template>

<style scoped>
.header {
  height: 100vh;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-color: rgba(43, 83, 163, 1);
}

.header-background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;

  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 76.58%),
    url(@/assets/background.png);
  border-radius: 0 0 34px 34px;
  mix-blend-mode: normal;
  opacity: 0.4;
  backdrop-filter: blur(12px);
}

.menu {
  position: relative;
  z-index: 100;
}

.menu-backdrop {
  position: absolute;
  backdrop-filter: blur(12px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  z-index: -1;
}

.menu-container {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
}

.logo {
  margin-right: 80px;
  z-index: 10;
}

/* Кнопка Заказать общие стили */
.menu-btn {
  color: white;
  background-color: #1a22d3;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
}

/* Мобильная кнопка - скрыта по умолчанию */
.mobile-only {
  display: none;
}

/* Показываем мобильную кнопку только на экранах <=768px */
@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
  /* Прячем десктопную кнопку на мобилках */
  .desktop-only {
    display: none;
  }

  .menu-container {
    padding-top: 17px;
    padding-right: 36px;
    padding-bottom: 17px;
    padding-left: 36px;
    border-bottom-width: 1px;
    max-width: none;
  }

  .menu-container > div {
    flex-grow: 1;
    justify-content: space-between;
  }
}

.menu > button {
  margin-left: auto;
}

.header-item {
  position: absolute;
  color: white;
  top: 50%;
  max-width: 734px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 34px;

  background:
    linear-gradient(0deg, rgba(25, 25, 61, 0.4), rgba(25, 25, 61, 0.4)),
    linear-gradient(312.56deg, rgba(0, 0, 0, 0.3) 0%, rgba(36, 84, 91, 0.3) 100%);
  box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.15) inset;
  backdrop-filter: blur(28px);
  z-index: 1;
}

.text-logo {
  font-weight: 700;
  font-style: Bold;
  font-size: 56px;
  line-height: 53px;
  letter-spacing: 2px;
  text-transform: uppercase;

  background: linear-gradient(90deg, #ffffff 0%, #1a22d3 39.05%);
  background-clip: text;
  color: transparent;
  margin-bottom: 24px;
}

.about-us-link {
  position: absolute;
  background-image: url('@/assets/element.svg');
  width: 177px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.about-us-link,
.about-us-link:hover a {
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  padding-top: 9px;
  line-height: 1;
}

.cut-element-arrow {
  width: 24px;
  height: 18px;
}

@media screen and (max-width: 768px) {
  .header-item {
    max-width: 100%;
    padding: 16px;
    border-radius: 16px;
    left: 32px;
    right: 32px;
    font-size: 24px;
    font-weight: 400;
  }

  .text-logo {
    font-size: 38px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
}
</style>
