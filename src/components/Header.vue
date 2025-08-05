<script setup>
import Logo from '../assets/Logo.svg'
import majesticons_arrow from '../assets/majesticons_arrow.svg'
import Menu from '@/components/Menu.vue'
</script>
<template>
  <header class="header">
    <img src="@/assets/background.png" alt="Background" class="header-background" />
    <div class="menu">
      <div class="menu-container container">
        <div class="flex">
          <img :src="Logo" alt="Логотип" class="logo" />
          <Menu />
        </div>
        <button class="menu-btn">Заказать</button>
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
  top: 0px;

  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 76.58%),
    url(@/assets/background.png);
  border-radius: 0px 0px 34px 34px;
  mix-blend-mode: normal;
  opacity: 0.4;
  backdrop-filter: blur(12px);
}

.menu {
  background: rgba(15, 54, 131, 0.24);
  backdrop-filter: blur(12px);
}

.menu-container {
  display: flex;

  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
}

.logo {
  margin-right: 80px;
}

.menu-btn {
  color: white;
}

.menu > button {
  margin-left: auto;
}

.header-item {
  position: absolute;
  color: white;
  top: 50%;
  max-width: 734px;
  padding: 120px 24px 24px 24px;
  box-sizing: border-box;
  border-radius: 34px;

  background:
    linear-gradient(0deg, rgba(25, 25, 61, 0.4), rgba(25, 25, 61, 0.4)),
    linear-gradient(312.56deg, rgba(0, 0, 0, 0.3) 0%, rgba(36, 84, 91, 0.3) 100%);

  box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.15) inset;

  backdrop-filter: blur(28px);
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
</style>
