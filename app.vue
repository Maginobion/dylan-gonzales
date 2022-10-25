<template>
  <NuxtLayout @change-theme="changeTheme" :icon="icon">
    <NuxtPage :transition="{
        name: 'bounce',
        mode: 'out-in'
      }"/>
  </NuxtLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const t = useI18n()

const theme = ref('dark-mode')

const icon = computed(()=>theme.value==='' ? 'i-clarity:sun-solid' : 'i-akar-icons:moon-fill')

const changeTheme = () =>
  theme.value==='' ? theme.value='dark-mode' : theme.value=''

useHead({
  titleTemplate: (title) => title ? `Maginobion - ${title}` : 'Maginobion',
  htmlAttrs:[{
    lang: t.locale,
  }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  link:[
    { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' }
  ],
  bodyAttrs: {
    class: theme,
  }
})

</script>

<style scoped>
:global(body){
  color: var(--color);
  background-color: var(--bg);
  font-family: 'OpenSans';
  transition: 0.6s all;
}

.page-enter-active, .page-leave-active {
  transition: all 0.4s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@font-face {
  font-family: 'OpenSans';
  src: local('Open Sans'), local('OpenSans'), local('Open-Sans'), url('~/assets/fonts/OpenSans.ttf');
  font-display: swap;
}
</style>