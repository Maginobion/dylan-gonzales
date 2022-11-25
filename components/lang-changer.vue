<template>
    <div class="buttonCont">
        <button @click="locale='es'" :class="locale==='es'&&'active'">ES</button>
        <button @click="locale='en'" :class="locale==='en'&&'active'">EN</button>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n()
</script>

<style scoped>
    
.buttonCont{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.buttonCont button{
    font-size: 1rem;
    background-color: transparent;
    color: var(--color);
}

.buttonCont button:hover{
    color: var(--color-primary);
}

.buttonCont button + button {
    border-left: 1px solid var(--color);
}

button{
    border: 0;
}

button.active{
    background-color: var(--bg);
    padding: 4px 6px;
    margin: 4px;
    border-radius: 4px;
}

</style>