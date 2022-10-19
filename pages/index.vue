<template>
  <div>
    <div class="top">
        <span>This site was made with</span> 
        <a href="https://v3.nuxtjs.org/" class="linkCont">
          <span>Nuxt 3</span>
          <img class="nuxt-icon" alt="Nuxt Framework Icon" style="height: 20px; width: 20px;"/>
        </a>
    </div>
    <section class="infoContainer">
        <div class='w-[600px]'>
            <div class="flex items-center">
                <img src="~/assets/svg/myName.svg" width="260px" height="63.63px" style="width: 260px;" alt="Dylan Gonzales Logotype"/>
                <p class="ml-4">Frontend Developer</p>
            </div>
            <p class="mt-4">
                Estudiante de universidad de cuarto año.
                Dispuesto a aprender nuevas tecnologías.
                Ávido lector y amante de los lenguajes
                naturales y de programación.
            </p>
        </div>
        <img src="~/assets/img/selfie.webp" width="260px" height="260px" alt="Dylan Gonzales Portrait" class="selfie"/>            
    </section> 
    <section class="techSection">
        <h4 class="headTitle">Tecnologías</h4>
        <TechDisplay :techStack="techStack"/>
    </section>     
    <section>
        <h4 class="headTitle text-center">Proyectos</h4>
        <ProjectCard v-for="asd in data" :repoLink="asd.repo" :liveLink="asd.live">
          <template #title>
            {{asd.title}}
          </template>
          <p>{{asd.description}}</p>
        </ProjectCard>
    </section>
  </div>
</template>

<script setup>
import ProjectCard from '~~/components/project-card.vue';
const techStack = [
  {
    class: 'i-ant-design:html5-filled',
    label: 'HTML5'
  },
  {
    class: 'i-bxl:css3',
    label: 'CSS3'
  },
  {
    class: 'i-bxl:typescript',
    label: 'Typescript'
  },
  {
    class: 'i-bxl:tailwind-css',
    label: 'Tailwind CSS'
  },
  {
    class: 'i-akar-icons:javascript-fill',
    label: 'Javascript'
  },
  {
    class: 'i-akar-icons:react-fill',
    label: 'React'
  },
  {
    class: 'i-akar-icons:vue-fill',
    label: 'Vue 3'
  },
  {
    class: 'i-akar-icons:nextjs-fill',
    label: 'Next.js'
  },
  {
    class: 'i-cib:laravel',
    label: 'Laravel'
  },
]

const data = [
  {
    title:"Aguinaga's Lab",
    description:"Proyecto trabajado en React para un laboratorio de vacunas. Aplicación escrita en su totalidad bajo el paradigma de componentes funcionales.",
    stack: ['react', 'next', 'tailwind'],
    repo:"",
    live:"",
  },
  {
    title:"Portafolio V2",
    description:"Esta página recopila todos los trabajos y tecnologías que domino. Diseñada con el propósito de darme a conocer al cliente.",
    stack: ['vue', 'nuxt'],
    repo:"https://github.com/Maginobion/nuxt-portfolio",
    live:"https://nuxt-portfolio-xi.vercel.app/",
  },
  {
    title:"Portafolio V1",
    description:"Esta página recopila todos los trabajos y tecnologías que domino. Diseñada con el propósito de darme a conocer al cliente.",
    stack: ['laravel', 'vue'],
    repo:"https://github.com/Maginobion/personal-portfolio",
    live:"",
  },
  {
    title:"Pokemon CRUD",
    description:"Página sencilla que permite listar, buscar, agregar, eliminar y editar pokemones varios. Datos enlazados con una API que maneja la base de datos.",
    stack: ['react', 'jest', 'testing-library', 'mock worker service', 'tailwind'],
    repo:"https://github.com/Maginobion/pokemon-crud",
    live:"https://pokemon-crud-bice.vercel.app/",
  },
]
useHead({
  title: 'Home'
})
</script>

<style scoped>

  img{
    width: 10px;
  }
  .infoContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px 0;
  }
  .selfie{
    width: 260px;
    border-radius: 1000px;
  }
  p{
    color: var(--color);
  }
  .nuxt-icon{
    content: var(--source);
    transition: 1s all;
  }
  .top{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  }
  .linkCont{
    display: flex;
    align-items: center;
    gap: 6px;
    color: #00C58E;
  }
  a{
    text-decoration: none;
  }
  .techSection{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .headTitle{
    padding: 12px 0;
  }
  section{
    padding: 20px auto;
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