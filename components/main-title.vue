<style scoped>

    .letters span{
        --col : v-bind('mycolor');
        font-size: 3em;
        margin-left: -8px;
        cursor: default;
        user-select: none;
        -webkit-transition: all 150ms ease-in-out;
        -moz-transition: all 150ms ease-in-out;
        -o-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
    }

    .letters span:hover{
        -webkit-transition: all 150ms ease-in-out;
        -moz-transition: all 150ms ease-in-out;
        -o-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
        filter: drop-shadow(10px 10px 50px var(--col));
        color: var(--col);
    }

    @media screen and (max-width:450px) {
        .letters{
            font-size: 2em;
        }
    }
</style>

<script setup>
import { useI18n } from 'vue-i18n';


const mycolor = ref('#'+(Math.random()*0xFFFFFF<<0).toString(16))

const randomizer = () =>    "hsl(" + 360 * Math.random() + ',' +(25 + 70 * Math.random()) + '%,' + (55 + 10 * Math.random()) + '%)'

const randomColor = () =>{
    mycolor.value = randomizer()
}

const { t } = useI18n()

const greetings = t('greetings')

</script>

<template>
    <div v-if="greetings" class="letters pt-[100px] text-[50px]">
        <span            
            v-for="(letter,i) of greetings"
            :key="letter+i"
            @mouseover="randomColor"           
        >
            {{letter}}
        </span>
        <p v-t="'introduction'"/>
    </div>
</template>

