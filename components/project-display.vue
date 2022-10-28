<template>
    <div class="container" v-for="asd in data">
        <h4>{{asd.title}}</h4>
        <p v-t="asd.description"/>
        <div v-if="asd.repo">
            Repositorio: <NuxtLink :to="asd.repo">{{asd.repo}}</NuxtLink>
        </div>
        <div v-if="asd.live">
            Live: <NuxtLink :to="asd.live">{{asd.live}}</NuxtLink>
        </div>        
    </div>
</template>

<script setup>

const data = [
    {
        title:"Foxbel Music",
        description:"foxbelDesc",
        stack: ['react', 'next', 'tailwind'],
        repo:"https://github.com/Maginobion/foxbel-music",
        live:"https://shiny-bienenstitch-665b69.netlify.app/",
    },
    {
        title:"Aguinaga's Lab",
        description:"aguinagaDesc",
        stack: ['react', 'next', 'tailwind'],
        repo:"",
        live:"",
    },
    {
        title:"Portafolio V2",
        description: "portfolioDesc",
        stack: ['vue', 'nuxt'],
        repo:"https://github.com/Maginobion/nuxt-portfolio",
        live:"https://nuxt-portfolio-xi.vercel.app/",
    },
    {
        title:"Portafolio V1",
        description:"portfolioDesc",
        stack: ['laravel', 'vue'],
        repo:"https://github.com/Maginobion/personal-portfolio",
        live:"",
    },
    {
        title:"Pokemon CRUD",
        description:"pokemonDesc",
        stack: ['react', 'jest', 'testing-library', 'mock worker service', 'tailwind'],
        repo:"https://github.com/Maginobion/pokemon-crud",
        live:"https://pokemon-crud-bice.vercel.app/",
    },
]
</script>

<style scoped>
.container{
    padding: 24px;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    margin: 10px auto;
}

@media screen and (max-width: 1150px){
    .infoContainer{
      flex-direction: column;
    }
    .infoContainer>div{
      width: min-content;
    }
  }
</style>