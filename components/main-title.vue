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
</style>

<script setup>

const mycolor = ref('#'+(Math.random()*0xFFFFFF<<0).toString(16))

const randomizer = () =>    "hsl(" + 360 * Math.random() + ',' +(25 + 70 * Math.random()) + '%,' + (55 + 10 * Math.random()) + '%)'

const randomColor = () =>{
    mycolor.value = randomizer()
}

</script>

<template>
    <div class="letters pt-[100px] text-[50px]">
        <span @mouseover="randomColor">{{$t('greetings')[0]}}</span>
        <span @mouseover="randomColor">{{$t('greetings')[1]}}</span>
        <span @mouseover="randomColor">{{$t('greetings')[2]}}</span>
        <span @mouseover="randomColor">{{$t('greetings')[3]}}</span>
        <span @mouseover="randomColor">{{$t('greetings')[4]}}</span>
        <span @mouseover="randomColor">{{$t('greetings')[5]}}</span>
        <p>{{$t('introduction')}}</p>
    </div>
</template>

