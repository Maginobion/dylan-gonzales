<template>
  <button
    :class="logic + ' themeSwitcher'" 
    @click="style==='' ? style='dark-mode' : style=''"
    aria-label="theme button"/>
  <SideNav/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

const style = ref('dark-mode')

const logic = computed(()=>style.value==='dark-mode' ? 'i-akar-icons:moon-fill' :  'i-clarity:sun-solid')

useHead({
  titleTemplate: (title) => title ? `Maginobion - ${title}` : 'Maginobion',
  htmlAttrs:[{
    lang: 'es',
  }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: style,
  }
})

</script>

<style scoped>
:global(body){
  color: var(--color);
  background-color: var(--bg);
  font-family: 'Open Sans';
  transition: all 0.4s;
}

button{
  border: 0;
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
  src: 'sans-serif';
}
.themeSwitcher{
  font-size: 1.875rem;
  position: absolute;
  right: 10px;
  margin: 4px;
}
</style>