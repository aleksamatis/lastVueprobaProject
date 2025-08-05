<template>
  <menu class="flex">
    <div class="menu-item">Программное обеспечение</div>
    <div class="menu-item">О компании</div>
    <div class="menu-item">Контакты</div>
  </menu>
</template>
<style scoped>
menu {
  display: flex;
  gap: 24px;
  align-items: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.menu-item {
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition-base);
}

.menu-item:hover {
  background: rgba(195, 195, 195, 0.3);
}
</style>
