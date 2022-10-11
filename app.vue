<template>
  <button :class="icon" @click="style==='' ? style='dark-mode' : style=''"></button>
  <SideNav/>  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

const style = ref('dark-mode')

const logic = ref(style.value==='dark-mode' ? 'i-akar-icons:moon-fill' :  'i-clarity:sun-solid')

const icon = ref(logic.value + ' text-3xl')

useHead({
  titleTemplate: (title) => title ? `Maginobion - ${title}` : 'Maginobion',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: style
  }
})

</script>

<style scoped>
  :global(body){
    /* --mainColor: v-bind(main);
    --subColor: black; */
    color: var(--color);
    background-color: var(--bg);
    font-family: 'Open Sans';
    transition: all 0.4s;
  }

  .page-enter-active, .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from, .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'),url('~/assets/fonts/OpenSans.ttf');
}
</style>