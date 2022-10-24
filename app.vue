<template>
  <button
    :class="logic + ' themeSwitcher'" 
    @click="style==='' ? style='dark-mode' : style=''"
    aria-label="theme button"/>
  <SideNav/>
  <div class="buttonCont">
    <button @click="$i18n.locale='es'">ES</button>
    <button @click="$i18n.locale='en'">EN</button>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n';


const t = useI18n()

const style = ref('dark-mode')

const logic = computed(()=>style.value==='dark-mode' ? 'i-akar-icons:moon-fill' :  'i-clarity:sun-solid')

useHead({
  titleTemplate: (title) => title ? `Maginobion - ${title}` : 'Maginobion',
  htmlAttrs:[{
    lang: t.locale,
  }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link:[
    { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' }
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

.buttonCont{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.buttonCont button{
  background-color: transparent;
  color: var(--color);
}

.buttonCont button:hover{
  color: var(--color-primary);
}

.buttonCont button + button {
  border-left: 1px solid var(--color);
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