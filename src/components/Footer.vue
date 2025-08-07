<template>
  <footer class="footer">
    <div class="footer-col footer-col-1">
      <div class="footer-sub-1">
        <img :src="Logo" alt="Логотип" class="logo" />
        <div>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled
        </div>
      </div>
      <div class="footer-sub-2">
        <div class="footer-sub-2">
          <div class="contacts-title">контакты</div>
          <a href="tel:+74955406141" class="footer-hover-2">+7 (495) 540-61-41</a>
          <a href="tel:+78002226141" class="footer-hover-2">+7 (800) 222-61-41</a>
          <a href="mailto:info@chint.ru" class="footer-hover-2">info@chint.ru</a>
          <a href="#" class="footer-hover-2">Ул. Автозаводская, дом 23 А, К2</a>
        </div>
      </div>
    </div>

    <div class="footer-col">
      <div class="section-title">КОМПАНИЯ</div>
      <a href="#" class="footer-hover-1">О компании</a>
      <a href="#" class="footer-hover-1">Заказы</a>
      <a href="#" class="footer-hover-1">Контакты</a>
    </div>

    <div class="footer-col">
      <div class="section-title">ПРОДУКТЫ</div>
      <a href="#" class="footer-hover-1">EN-Safety suite</a>
      <a href="#" class="footer-hover-1">EN-Soft Advance Alarm Managmen</a>
      <a href="#" class="footer-hover-1">EN-Soft AMS</a>
      <a href="#" class="footer-hover-1">EN-Soft Batch</a>
      <a href="#" class="footer-hover-1">EN-Soft CHAMS</a>
      <a href="#" class="footer-hover-1">EN-Soft EPG DCG</a>
    </div>
  </footer>
</template>

<script setup>
import Logo from '../assets/Logo.svg'
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
  color: white;
  background-color: #000237;
}

/* Первая колонка делится на две строки */
.footer-col-1 {
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
}

/* Логотип и текст */
.footer-sub-1 {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  padding-right: 50px;
}

.logo img {
  width: 200px;
  height: 200px;
}

/* Контакты — вертикальный список */
.footer-sub-2 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}

.contacts-title,
.section-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.footer-col {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-hover-1 {
  color: white;
  font-size: 14px;
  padding: 12px 0px;
  display: inline-block; /* чтобы padding влиял */
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.footer-hover-1:hover {
  background: rgba(47, 66, 129, 1);
  color: white;
}

.footer-hover-2 {
  color: white;
  text-decoration: none;
  display: block; /* чтобы был вертикальный список */
  padding: 4px 0;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer-hover-2:hover {
  color: #1b87df;
}

/* --- Адаптив --- */
@media (max-width: 768px) {
  .footer {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  /* Первая колонка — логотип+текст сверху, контакты снизу, оба вертикально */
  .footer-col-1 {
    grid-template-rows: auto auto;
  }

  /* Отступы у первой колонки убираем */
  .footer-sub-1 {
    padding-right: 0;
  }
}
</style>
