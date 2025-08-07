<template>
  <footer class="footer-container">
    <div class="footer container">
      <div class="footer-col footer-col-1 footer-logo">
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
            <div>Ул. Автозаводская, дом 23 А, К2</div>
          </div>
        </div>
      </div>

      <div class="footer-col">
        <div class="section-title">КОМПАНИЯ</div>
        <a href="#" class="footer-hover-1"><div>О компании</div></a>
        <a href="#" class="footer-hover-1"><div>Заказы</div></a>
        <a href="#" class="footer-hover-1"><div>Контакты</div></a>
      </div>

      <div class="footer-col">
        <div class="section-title">ПРОДУКТЫ</div>
        <a href="#" class="footer-hover-1"><div>EN-Safety suite</div></a>
        <a href="#" class="footer-hover-1"><div>EN-Soft Advance Alarm Managmen</div></a>
        <a href="#" class="footer-hover-1"><div>EN-Soft AMS</div></a>
        <a href="#" class="footer-hover-1"><div>EN-Soft Batch</div></a>
        <a href="#" class="footer-hover-1"><div>EN-Soft CHAMS</div></a>
        <a href="#" class="footer-hover-1"><div>EN-Soft EPG DCG</div></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import Logo from '../assets/Logo.svg'
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
  color: white;
  background-image: url('@/assets/footer-background.svg');
  background-position: top;
}

.footer-container {
  background: rgba(0, 2, 55, 1);
  border-radius: 34px 34px 0 0;
  padding-top: 120px;
}

/* Первая колонка делится на две строки */
.footer-col-1 {
  display: flex;
  flex-direction: column;
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

.logo {
  height: 60px;
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
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-hover-1 {
  color: white;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.footer-hover-1 div {
  padding: 12px 7px;
  border-radius: 8px;
}

.footer-hover-1 div:hover {
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
    grid-template-columns: repeat(2, 1fr); /* два столбца */
    grid-auto-rows: auto;
    row-gap: 40px;
  }

  .footer-logo {
    grid-column: 1 / -1; /* логотип занимает всю ширину */
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
