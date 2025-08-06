<template>
  <nav class="flex menu">
    <!-- Бургер для мобильных -->
    <button class="burger" @click="$emit('toggle-menu')" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Основное меню: скрываем на мобильных, показываем при isOpen -->
    <div class="menu-items" :class="{ open: isOpen }">
      <div
        class="menu-item"
        @mouseenter="!isMobile && (open = true)"
        @mouseleave="!isMobile && (open = false)"
        @click="isMobile && (open = !open)"
      >
        Программное обеспечение
        <span class="arrow" :class="{ open: open }">▼</span>

        <!-- Подменю для мобилки и десктопа -->
        <div v-show="open" class="dropdown">
          <div class="dropdown-item">Подпункт 1</div>
          <div class="dropdown-item">Подпункт 2</div>
          <div class="dropdown-item">Подпункт 3</div>
        </div>
      </div>

      <div class="menu-item">О компании</div>
      <div class="menu-item">Контакты</div>

      <!-- Отдельная кнопка Заказать на мобильных, после Контактов -->
      <button v-if="isMobile && isOpen" class="order-button" @click="order">Заказать</button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      open: false,
      isMobile: false,
    }
  },
  mounted() {
    this.checkIsMobile()
    window.addEventListener('resize', this.checkIsMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile)
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768
      if (!this.isMobile) {
        this.open = false
      }
    },
    order() {
      alert('Заказ оформлен!')
    },
  },
}
</script>

<style scoped>
.menu {
  display: flex;
  gap: 24px;
  align-items: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
  position: relative;
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
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    padding: 16px 0;
    border-radius: 0 0 12px 12px;
    z-index: 20;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  .menu-items.open {
    display: flex;
  }

  .menu-item {
    padding: 12px 20px;
    font-size: 16px;
    position: relative;
  }

  .arrow {
    display: inline-block;
    margin-left: 8px;
    transition: transform 0.3s ease;
    font-size: 12px;
    user-select: none;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .dropdown {
    /* Сделаем раскрывающееся меню внутри потока, чтобы сдвигать контент вниз */
    padding-left: 16px;
    background: rgba(255 255 255 / 0.05);
    border-left: 2px solid #ff6600;
    margin-top: 8px;
  }

  .dropdown-item {
    padding: 8px 0 8px 16px;
    font-size: 15px;
    cursor: pointer;
    color: #fff;
  }

  .dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
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
.menu-item {
  padding: 8px 16px 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition-base);
  position: relative;
}

.menu-item:hover {
  background: rgba(195, 195, 195, 0.3);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  min-width: 180px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding: 16px 0 8px 0;
  z-index: 10;
}

.dropdown-item {
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.2);
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
