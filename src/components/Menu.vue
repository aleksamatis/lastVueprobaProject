<template>
  <nav class="flex menu">
    <!-- Бургер для мобильных -->
    <button class="burger" @click="open = !open" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Основное меню: скрываем на мобильных, показываем при isOpen -->
    <div class="menu-items" :class="{ open: open }">
      <div
        class="menu-item-wrapper"
        @mouseenter="!isMobile && (submenuOpen = true)"
        @mouseleave="!isMobile && (submenuOpen = false)"
      >
        <div class="menu-item" @click="isMobile && (submenuOpen = !submenuOpen)">
          <div class="flex items-center" :class="{ open: submenuOpen }">
            Программное обеспечение
            <inline-svg
              class="arrow"
              src="@/assets/majesticons_arrow.svg"
              :width="24"
              height="24 "
            />
          </div>
        </div>

        <!-- Подменю для мобилки и десктопа -->
        <div v-show="submenuOpen" class="dropdown">
          <div class="dropdown-item">EN-Safety suite</div>
          <div class="dropdown-item">EN-Soft Advance Alarm Managment</div>
          <div class="dropdown-item">EN-Soft AMS</div>
          <div class="dropdown-item">EN-Soft Batch</div>
          <div class="dropdown-item">EN-Soft CHAMS</div>
          <div class="dropdown-item">EN-Soft EPG DCG</div>
          <div class="dropdown-item">EN-Soft Gaz Turbine Control</div>
          <div class="dropdown-item">EN-Soft Process Control</div>
          <div class="dropdown-item">EN-Soft Report Analysis</div>
          <div class="dropdown-item">EN-Soft SOE</div>
        </div>
      </div>

      <div class="menu-item">О компании</div>
      <div class="menu-item">Контакты</div>

      <!-- Отдельная кнопка Заказать на мобильных, после Контактов -->
      <button v-if="isMobile && open" class="order-button" @click="order">Заказать</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref<boolean>(true)
const submenuOpen = ref<boolean>(false)
const isMobile = ref<boolean>(false)

const checkIsMobile = (): void => {
  isMobile.value = window.innerWidth <= 768
  if (!isMobile.value) {
    open.value = false
  }
}

const order = (): void => {
  alert('Заказ оформлен!')
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>

<style scoped>
.menu {
  display: flex;
  gap: 24px;
  align-items: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
  position: relative;
  z-index: 10;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

.menu-items {
  display: flex;
  gap: 24px;
  align-items: center;
}

/* --- Мобильные стили --- */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .menu-items {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    width: 360px;
    max-width: 90vw;
    flex-direction: column;
    padding: 16px 0;
    border-radius: 12px;
    z-index: 20;
    align-items: start;

    background: rgba(42, 40, 65, 0.7);
    backdrop-filter: blur(26px);
    -webkit-backdrop-filter: blur(26px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 16px;
    z-index: 1000;
    transform: translateZ(0);
  }

  .menu-items.open {
    display: flex;
  }

  .menu-item {
    padding: 12px 20px;
    font-size: 16px;
    position: relative;
  }

  .menu-item:hover {
    background: none !important;
  }

  .dropdown {
    /* Сделаем раскрывающееся меню внутри потока, чтобы сдвигать контент вниз */
    position: relative !important;
    margin-top: 16px;
    background: rgba(255, 255, 255, 0.08) !important;
    backdrop-filter: blur(26px);
    -webkit-backdrop-filter: blur(26px);
    border: 0 !important;
    padding: 16px;
    z-index: 1000;
    border-radius: 12px;
    transform: translateZ(0);
    will-change: transform;
  }

  .dropdown-item {
    padding: 8px 0 8px 16px;
    font-size: 15px;
    cursor: pointer;
    color: #fff;
  }

  .arrow {
    display: inline-block;
    margin-left: 8px;
    transition: transform 0.3s ease;
    font-size: 12px;
    user-select: none;
    color: #fff;
  }

  .order-button {
    margin: 8px 32px;
    padding: 10px 0;
    width: calc(100% - 64px);
    background-color: #ff6600;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .order-button:hover {
    background-color: #e65500;
  }
}

/* --- Десктоп --- */
.menu-item-wrapper {
  position: relative;
}

.menu-item {
  padding: 8px 16px 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition-base);
  position: relative;
  z-index: 10;
}

.menu-item:hover {
  background: rgba(195, 195, 195, 0.3);
}

/* Invisible bridge to keep hover active */
.menu-item-wrapper::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 12px; /* Same as the gap */
  z-index: 9998;
}

.dropdown {
  position: absolute;
  top: calc(100% + 12px); /* Add 12px gap */
  left: 0;
  background: rgba(42, 40, 65, 0.7);
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border-radius: 12px;
  min-width: 180px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 16px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transform: translateZ(0);
  will-change: transform;
}

.dropdown-item {
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 8px;
}

.dropdown-item:hover {
  background: rgba(47, 66, 129, 1);
}

.order-button {
  margin: 8px 16px;
  padding: 10px 20px;
  background-color: #ff6600;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: calc(100% - 32px);
  text-align: center;
}

.order-button:hover {
  background-color: #e65500;
}
</style>
