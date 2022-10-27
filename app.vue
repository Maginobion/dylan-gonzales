<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const t = useI18n()

const config = useAppConfig()

const theme = computed(()=>config.theme.dark ? 'dark-mode' : '')

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


@font-face {
  font-family: 'OpenSans';
  src: local('Open Sans'), local('OpenSans'), local('Open-Sans'), url('~/assets/fonts/OpenSans.ttf');
  font-display: swap;
}
</style>