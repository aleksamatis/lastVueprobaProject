<template>
  <div class="text-input-container">
    <label v-if="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue || value"
      @change="handleChange"
      @input="handleInput"
      @blur="(event) => emit('blur', event)"
      @focus="(event) => emit('focus', event)"
    />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue', 'update:value', 'input', 'blur', 'focus', 'change'])

defineProps({
  label: String,
  error: String,
  modelValue: [String, Number],
  value: [String, Number],
})

const handleInput = (event) => {
  const newValue = event.target.value
  emit('update:modelValue', newValue)
  emit('update:value', newValue)
  emit('input', newValue)
}

const handleChange = (event) => {
  const newValue = event.target.value
  emit('change', newValue)
}
</script>

<style scoped>
.text-input-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  font-weight: 500;
  font-size: 16px;
  line-height: 138%;
  color: rgba(130, 130, 130, 1);
  margin-bottom: 8px;
}

input {
  border: 0;
  outline: none;
  border-bottom: 2px solid rgba(204, 204, 204, 1);
  border-radius: 0;
  padding: 8px 0;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: rgba(0, 87, 255, 1);
}

input:invalid {
  border-color: rgba(255, 0, 65, 1);
}

.error {
  color: rgba(255, 0, 65, 1);
  font-size: 0.85rem;
  margin-top: 4px;
}
</style>
