<template>
    <input 
        id="theme" 
        type="checkbox"
        v-bind="config.theme.dark"
        @click="config.theme.dark=!config.theme.dark"
    >
    <label for="theme" :class="config.theme.dark && 'dark'">
        <div class="i-akar-icons:moon-fill text-3xl"></div>
        <div class="i-clarity:sun-solid text-3xl"></div>
    </label>    
</template>

<script setup>

const config = useAppConfig()
const icon = computed(()=> config.theme.dark ? 'i-akar-icons:moon-fill' : 'i-clarity:sun-solid')

</script>

<style scoped>
input{
    visibility: hidden;
}
label{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 10px;
    position: absolute;
    translate: 40px 20px;
    transition: 0.4s all ease-in-out;
    color: black;
}
label.dark{
    translate: 40px -20px;
}
</style>