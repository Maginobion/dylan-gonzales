<template>
    <div class="buttonCont">
        <button @click="locale='es'">ES</button>
        <button @click="locale='en'">EN</button>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

    const { locale } = useI18n()
    console.log(locale.value)
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

</style>