<style scoped>

    .letters span{
        --col : v-bind('mycolor');
        font-size: 3em;
        margin-left: -8px;
        cursor: default;
        user-select: none;
        animation: out 1s ease-in-out both;
    }

    .letters span:hover{
        animation: on 0.4s ease-in-out both;
    }

    @keyframes on{
        from{
            filter: none;
            color: inherit;
        }
        to{
            filter: drop-shadow(10px 10px 50px var(--col));
            color: var(--col);
        }
    }

    @keyframes out{
        from{
            filter: drop-shadow(10px 10px 50px var(--col));
            color: var(--col);
        }
        to{
            filter: none;
            color: inherit;
        }       
    }

    @media screen and (max-width:450px) {
        .letters{
            font-size: 2em;
        }
    }
</style>

<script setup>

const randomizer = () => "hsl(" + 360 * Math.random() + ',' +(25 + 70 * Math.random()) + '%,' + (55 + 10 * Math.random()) + '%)'

const mycolor = ref(randomizer())

const randomColor = () =>{
    mycolor.value = randomizer()
}

</script>

<template>
    <div class="letters pt-[100px] text-[50px]">
        <span
            v-for="(letter,index) of $t('greetings')"
            :key="letter+'-'+index"
            @mouseover="randomColor"           
        >
            {{letter}}
        </span>
        <p v-t="'introduction'"/>
    </div>
</template>

