<template>
  <div class="contact-form-wrapper container">
    <div class="contact-image">
      <img src="@/assets/mail-icon.png" alt="Mail Icon" />
    </div>
    <div class="contact-form">
      <h2>СВЯЖЕМСЯ С ВАМИ</h2>
      <p class="description">
        Задача организации, в особенности же выбранный нами инновационный путь представляет собой
        интересный эксперимент проверки системы обучения кадров.
      </p>

      <form @submit.prevent="handleSubmit">
        <TextInput v-model:value="form.name" type="text" label="Имя фамилия" :error="errors.name" />
        <TextInput v-model:value="form.email" type="email" label="Email" :error="errors.email" />

        <div>
          <button type="submit" class="submit-button">Отправить</button>
        </div>
      </form>

      <div class="stats">
        <div>
          <h3>5,910+</h3>
          <p>Пользователей используют наши программы</p>
        </div>
        <div>
          <h3>200+</h3>
          <p>Положительных отзывов об обеспечении EN-SOFT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import TextInput from '@/components/TextInput.vue'

interface FormData {
  name: string
  email: string
}

interface FormErrors {
  name?: string
  email?: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
})

const errors = reactive<FormErrors>({})

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = (): void => {
  // Clear previous errors
  Object.keys(errors).forEach((key) => delete errors[key as keyof FormErrors])

  if (!form.name.trim()) {
    errors.name = 'Введите имя и фамилию'
  }

  if (!form.email.trim()) {
    errors.email = 'Введите email'
  } else if (!validateEmail(form.email)) {
    errors.email = 'Неверный формат email'
  }

  if (Object.keys(errors).length === 0) {
    alert('Форма отправлена!')
    // Здесь можно отправить данные на сервер
    form.name = ''
    form.email = ''
  }
}
</script>

<style scoped>
.contact-form-wrapper {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding-top: 80px;
  padding-bottom: 80px;
}

.contact-form-wrapper > * {
  flex: 1 1;
}

.contact-image img {
  height: auto;
}

.contact-form {
  flex: 1;
}

.description {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #0057ff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  padding-top: 12px;
  padding-right: 54px;
  padding-bottom: 12px;
  padding-left: 54px;
  margin-top: 40px;
}

.submit-button:hover {
  background-color: #0042c1;
}

.stats {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.stats h3 {
  margin: 0;
}

.stats p {
  margin: 4px 0 0;
  font-size: 0.9rem;
  color: #555;
}

@media screen and (max-width: 768px) {
  .contact-form-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .contact-image {
    margin-bottom: 20px;
  }

  .stats {
    flex-direction: column;
    align-items: start;
  }
}
</style>
