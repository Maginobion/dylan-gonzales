<template>
    <button
        :class="icon + ' themeSwitcher'" 
        @click="config.theme.dark=!config.theme.dark"
        aria-label="theme button"
    />       
</template>

<script setup lang="ts">

const config = useAppConfig()
const icon = computed(()=> config.theme.dark ? 'i-akar-icons:moon-fill' : 'i-clarity:sun-solid')

</script>

<style scoped>
.themeSwitcher{
    font-size: 1.875rem;
}
</style>