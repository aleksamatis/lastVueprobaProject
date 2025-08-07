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
  <section class="main">
    <div class="items-recomendation container">
      <div class="r-txt">РЕКОМЕНДУЕМ</div>
      <button class="r-btn">Посмотреть все</button>
    </div>
    <div class="detailed-items container">
      <div v-for="(item, index) in items" :key="index" class="di-1">
        <img :src="item.picture" alt="Item image" />
        <div class="item-content">
          <h3>{{ item.title }}</h3>
          <div class="mb-xl">{{ item.description }}</div>
          <button class="btn">{{ item.buttonText }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main {
  border-radius: 34px;
  padding-top: 80px;
  padding-bottom: 80px;
  background: linear-gradient(180deg, #4050aa 0%, #0f1a58 100%);
}
.items-recomendation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}
.r-btn {
  background: rgba(195, 195, 195, 0.3);
  white-space: nowrap;
}
.r-txt {
  font-weight: 600;
  font-size: 36px;
  color: #9baafc;
}
.detailed-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.di-1 img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: -24px;
}

.item-content {
  padding: 24px;
  background: rgba(32, 35, 67, 1);
  border-radius: 24px;
  color: white;
}

.di-1 {
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
}

.btn:hover {
  background-color: #071dbb;
}

@media screen and (max-width: 1280px) {
  .detailed-items {
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
    row-gap: 40px;
  }
}

@media screen and (max-width: 768px) {
  .detailed-items {
    grid-template-columns: 1fr;
    max-width: 100%;
    row-gap: 40px;
  }
  .r-txt {
    font-size: 20px;
  }
}
@media (max-width: 375px) {
  .items-recomendation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>
