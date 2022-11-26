<template>
    <div>
        <input 
            id="lang" 
            type="checkbox"
            @click="locale==='es' ? locale='en' : locale='es'"
        >
        <span class="selected"/>
        <label for="lang">
            <div class="bg">
                <span>ES</span>
                <span>EN</span>
            </div>
        </label>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n()
</script>

<style scoped>

#lang{
    display: none;
}
label{
    display: flex;
    margin: 2px 8px 2px 2px;
    background-color: var(--color-primary);
    padding: 4px 5px;
    border-radius: 100px;
}
label span{
    color: var(--bg);
    z-index: 2;
}
.bg{
    display: flex;
    gap: 8px;
    z-index: 0;
}
.selected{
    position: absolute;
    width: 28px;
    height: 28px;
    z-index: 0;
    top: 4px;
    background-color: var(--border-color);
    border-radius: 100px;
    translate: 3px 5px;
    transition: translate 0.4s ease-in-out;
}
#lang:checked + .selected{
    translate: 30px 5px;
}

</style>