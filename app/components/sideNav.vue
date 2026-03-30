<template>
  <button
    class="hamburger"
    :class="{ active: isOpen }"
    @click="isOpen = !isOpen"
    :aria-label="isOpen ? 'close navigation bar' : 'open navigation bar'"
  >
    <span />
    <span />
    <span />
  </button>
  <div class="fader" :class="{ visible: isOpen }" @click="isOpen = false" />
  <nav :class="{ open: isOpen }" class="sideNav">
    <ul class="navList">
      <li v-for="(item, i) in links" :key="item.to">
        <NuxtLinkLocale
          :to="item.to"
          :data-label="menuValues(i)"
          @click="isOpen = false"
        >
          <div :class="item.icon + ' text-xl'" />
          <span>{{ menuValues(i) }}</span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
const { rt, tm } = useI18n();
const menuValues = (code) => rt(tm("menu")[code]);

const links = [
  { to: "/", icon: "i-mdi:home-outline" },
  { to: "/about", icon: "i-mdi:account-outline" },
  { to: "/projects", icon: "i-mdi:folder-outline" },
  { to: "/contact", icon: "i-mdi:email-outline" },
];
</script>

<style scoped>
/* ── Hamburger button ── */
.hamburger {
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Backdrop ── */
.fader {
  position: fixed;
  z-index: 5;
  inset: 0;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.fader.visible {
  opacity: 1;
  pointer-events: auto;
}

/* ── Sidebar ── */
.sideNav {
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: var(--bg-secondary);
  padding: 72px 0 24px;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
}

.sideNav.open {
  transform: translateX(0);
}

/* ── Nav links ── */
.navList {
  margin: 0;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.navList li {
  list-style-type: none;
}

.navList a {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 17px;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.navList a:hover {
  background-color: rgba(21, 136, 118, 0.1);
  color: var(--color-primary);
}

.router-link-exact-active {
  background-color: rgba(21, 136, 118, 0.15);
  color: var(--color-primary);
  font-weight: 600;
}

/* ── Responsive ── */
@media screen and (max-width: 500px) {
  .sideNav {
    width: 100%;
  }
}
</style>
