<script setup>
import Logo from '../assets/Logo.svg'
import background from '../assets/background.png'
import element from '../assets/element.svg'
import majesticons_arrow from '../assets/majesticons_arrow.svg'
</script>
<template>
  <header class="header" :style="{ backgroundImage: `url(${background})` }">
    <div class="menu">
      <img :src="Logo" alt="Логотип" class="logo" />
      <div>Программное обеспечение</div>
      <div>О компании</div>
      <div>Контакты</div>
      <button class="menu-btn">Заказать</button>
    </div>
    <div class="header-item">
      <div class="text-logo">EN SOFT</div>
      <div>
        Текст-рыба получите доступ к встроенным продуктам для настройки аппаратной конфигурации и
        создания прикладных программ
      </div>
    </div>
    <img :src="element" class="cut-element" />
    <img :src="majesticons_arrow" class="cut-element-arrow" />
  </header>
</template>

<style scoped>
.header {
  height: 600px; /* или больше, как нужно */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.menu {
  display: flex;
  background-color: rgba(243, 243, 243, 0.8); /* светло-серый с прозрачностью */
  gap: 20px;
  align-items: center;
}
.menu-btn {
  background-color: #092efc;
  color: white;
  border-radius: 12px;
  padding: 32px 15px;
}

.menu > button {
  margin-left: auto;
}

.menu > div {
  cursor: pointer;
}

.header-item {
  background-color: black;
  color: white;
  margin-top: 50px;
  max-width: 500px;
  padding: 15px;
  box-sizing: border-box;
}
.text-logo {
  font-weight: 700;
  font-style: Bold;
  font-size: 56px;
  line-height: 53px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.cut-element {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.cut-element-arrow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
