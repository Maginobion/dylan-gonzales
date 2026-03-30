<template>
  <div>
    <div class="uprightCont">
      <LangChanger />
      <ThemeSwitcher />
    </div>
    <SideNav />
    <div class="totalCenter">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.totalCenter {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.uprightCont {
  position: fixed;
  z-index: 2;
  top: 12px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: color-mix(in srgb, var(--bg) 70%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
  padding: 6px 8px;
  border-radius: 22px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

@media screen and (max-width: 500px) {
  .totalCenter {
    padding: 10px 40px;
  }
  .uprightCont {
    top: 8px;
    right: 8px;
    gap: 6px;
    padding: 4px 6px;
    border-radius: 18px;
  }
}

@media screen and (max-width: 360px) {
  .uprightCont {
    flex-direction: column;
    right: 6px;
    gap: 4px;
  }
}
</style>
