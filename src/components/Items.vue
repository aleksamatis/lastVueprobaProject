<script setup>
import pic1 from '../assets/c9d87b524a97d61971450ffe49a40af2629eeb61.png'

const items = [
  {
    picture: pic1,
    title: 'EN-Safety Suite',
    description:
      'Программный комплекс для настройки аппаратной конфигурации, создания прикладных программ на языках соответствующих стандарту МЭК 61131-3.',
    buttonText: 'Подробнее',
  },
  {
    picture: pic1,
    title: 'EN-Soft CHAMS',
    description:
      'Программный комплекс для настройки аппаратной конфигурации, создания прикладных программ на языках соответствующих стандарту МЭК 61131-3.',
    buttonText: 'Подробнее',
  },
  {
    picture: pic1,
    title: 'EN-Soft SOE',
    description:
      'Программный комплекс для настройки аппаратной конфигурации, создания прикладных программ на языках соответствующих стандарту МЭК 61131-3.',
    buttonText: 'Подробнее',
  },
]
</script>

<template>
  <main class="main">
    <div class="detailed-items">
      <div v-for="(item, index) in items" :key="index" class="di-1">
        <img :src="item.picture" alt="Item image" />
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <button class="btn">{{ item.buttonText }}</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  padding: 20px;
}

.detailed-items {
  display: flex;
  gap: 20px;
}

.di-1 img {
  width: 100%;
  height: auto;
  display: block;
}

.di-1 {
  max-width: 300px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #373951;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  background-color: #092efc;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  align-self: flex-start; /* чтобы кнопка была слева */
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #071dbb;
}
</style>
