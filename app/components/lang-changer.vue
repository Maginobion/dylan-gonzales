<template>
  <div class="lang-toggle">
    <input
      id="lang"
      type="checkbox"
      :checked="locale === 'es'"
      @click="
        locale === 'en'
          ? router.push(switchLocalePath('es'))
          : router.push(switchLocalePath('en'))
      "
    />
    <label for="lang">
      <span class="lang-option" :class="{ active: locale === 'en' }">EN</span>
      <span class="lang-option" :class="{ active: locale === 'es' }">ES</span>
      <span class="slider" />
    </label>
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
const router = useRouter();
</script>

<style scoped>
.lang-toggle {
  position: relative;
}

#lang {
  display: none;
}

label {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  background-color: var(--color-primary);
  border-radius: 20px;
  padding: 4px;
  gap: 0;
  user-select: none;
}

.lang-option {
  position: relative;
  z-index: 1;
  width: 32px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  line-height: 26px;
  color: var(--color-primary);
  transition: color 0.3s ease;
}

.lang-option.active {
  color: var(--bg);
}

.slider {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 26px;
  background-color: var(--border-color);
  border-radius: 16px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

#lang:checked + label .slider {
  transform: translateX(32px);
}
</style>
