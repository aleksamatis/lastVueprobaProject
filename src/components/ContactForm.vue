<template>
  <div class="contact-form-wrapper">
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
        <input v-model="form.name" type="text" placeholder="Имя фамилия" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>

        <input v-model="form.email" type="email" placeholder="Email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>

        <button type="submit">Отправить</button>
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

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
      errors: {},
    }
  },
  methods: {
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },
    handleSubmit() {
      this.errors = {}

      if (!this.form.name.trim()) {
        this.errors.name = 'Введите имя и фамилию'
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'Введите email'
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Неверный формат email'
      }

      if (Object.keys(this.errors).length === 0) {
        alert('Форма отправлена!')
        // Здесь можно отправить данные на сервер
        this.form.name = ''
        this.form.email = ''
      }
    },
  },
}
</script>

<style scoped>
.contact-form-wrapper {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding: 40px;
}

.contact-image img {
  max-width: 300px;
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

button {
  background-color: #0057ff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #0042c1;
}

.error {
  color: red;
  font-size: 0.85rem;
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
</style>
