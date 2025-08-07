<script setup>
import animationVideo from '../assets/0a61daabaac3bc985419738ca25ba823b3fd350e.gif.mp4'
</script>
<template>
  <section class="features">
    <div class="detailed-information">
      <div>
        <div class="di-1">4000+</div>
        <div class="di-2">Покупателей</div>
        <div class="di-3">Наши системы пользуются доверием</div>
      </div>
      <div>
        <div class="di-1">100%</div>
        <div class="di-2">Гарантия</div>
        <div class="di-3">Вы точно не ошибётесь выбрав EN-SOFT</div>
      </div>
      <div>
        <div class="di-1">100 тыс.</div>
        <div class="di-2">Довольных пользователей</div>
        <div class="di-3">Более 100 тыс. человек в компаниях используют наши системы</div>
      </div>
      <div>
        <div class="di-1">200+</div>
        <div class="di-2">Отзывов</div>
        <div class="di-3">We’re proud of our 5-star rating with over 200 reviews.</div>
      </div>
    </div>
    <div class="video-wrapper">
      <video autoplay loop muted playsinline class="animation">
        <source :src="animationVideo" type="video/mp4" />
        <!--img :src="Logo" alt="Логотип" class="logo" /-->
      </video>
    </div>
  </section>
</template>

<style scoped>
.di-1 {
  font-weight: 600;
  font-size: 56px;
  color: #092efc;
  line-height: 72px;
  text-align: center;
}
.di-2 {
  font-weight: 600;
  font-size: 18px;
  color: #181818;
  line-height: 28px;
  text-align: center;
}
.di-3 {
  font-weight: 400;
  font-size: 16px;
  color: #667085;
  line-height: 130%;
  text-align: center;
}
.features {
  display: flex;
  gap: 96px;
}

.features > div {
  flex: 1 1;
}

.detailed-information {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Две колонки */
  gap: 24px;
  flex-shrink: 0;
  align-items: center;
}
.video-wrapper {
  flex-grow: 1; /* занимает всё оставшееся место */
  border-radius: 32px;
  overflow: hidden;
}
.animation {
  width: 100%;
  height: 600px; /* фиксированная высота */
  display: block;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .features {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
  }
}

@media (max-width: 375px) {
  .detailed-information {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .di-1 {
    font-size: 40px;
  }
}
</style>
