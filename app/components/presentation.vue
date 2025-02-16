<template>
    <div class="container">
        <div class="card">
            <h1 class="title" v-t="'aboutMe'"/>
            <p v-t="'aboutMeFirst'"/>
            <p v-t="'aboutMeSecond'"/>
            <p v-t="'aboutMeThird'"/>
            <p v-t="'aboutMeFourth'"/>
        </div>
        <NuxtLink to="/contact" v-t="'aboutMeButton'"/>
    </div>
</template>

<style scoped>
.container{
    margin: 0 28px;
}
.title{
    --mycolor: v-bind('mycolor');
    font-size: 70px;
    color: var(--mycolor);
    filter: drop-shadow(0 0 20px var(--mycolor));
    margin-bottom: 20px;
    transition: 0.6s all ease-in-out;
}
p{
    color: var(--color);
    font-size: 18px;
}
a{
    padding-top: 120px;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: 1s all ease-in-out;
    color:rgb(177 177 177);
}
a:hover{
    font-size: 20px;
    font-weight: 600;
    color: white;
    animation: glow 2s ease-in-out infinite alternate;
    filter: drop-shadow(1px 1px 4px rgba(255, 255, 255, 0.209));
}
a::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    margin-top: -5px;
    height: 1px;
    background-color: white;
    transition: 1s all ease-in-out;
}
a:hover::after{
    width: 100%;
}
@keyframes glow {
    100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px red,
      0 0 80px red,
      0 0 90px red,
      0 0 100px red,
      0 0 150px red;
  }
  0% {
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px red,
      0 0 45px red,
      0 0 55px red,
      0 0 70px red,
      0 0 80px red;
  }
}

@media screen and (max-width: 1150px){
    .title{
        flex-direction: column;
    }
    .infoContainer>div{
        width: min-content;
    }
}
</style>

<script setup>

const randomizer = () => "hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (55 + 10 * Math.random()) + '%)'

const mycolor = ref(randomizer())

const randomColor = () =>{
    setInterval(()=>{
        mycolor.value = randomizer()
    },600)
}

onMounted(()=>{
    randomColor()
})
</script>