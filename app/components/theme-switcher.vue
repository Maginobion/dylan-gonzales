<template>
  <div class="theme-toggle">
    <input
      id="theme"
      type="checkbox"
      :checked="config.theme.dark"
      @click="config.theme.dark = !config.theme.dark"
    />
    <label for="theme">
      <span class="icon-wrapper" :class="{ active: !config.theme.dark }">
        <div class="i-clarity:sun-solid text-lg" />
      </span>
      <span class="icon-wrapper" :class="{ active: config.theme.dark }">
        <div class="i-akar-icons:moon-fill text-lg" />
      </span>
      <span class="slider" />
    </label>
  </div>
</template>

<script setup>
const config = useAppConfig();
</script>

<style scoped>
.theme-toggle {
  position: relative;
}

#theme {
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

.icon-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 26px;
  color: var(--color-primary);
  transition: color 0.3s ease;
}

.icon-wrapper.active {
  color: var(--bg);
}

.slider {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 28px;
  height: 26px;
  background-color: var(--border-color);
  border-radius: 16px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

#theme:checked + label .slider {
  transform: translateX(28px);
}
</style>
