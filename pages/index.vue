<template>
  <div>
    <div class="top">
        <span>This site was made with</span> 
        <a href="https://v3.nuxtjs.org/" class="linkCont">
          <span>Nuxt 3</span> 
          <img class="nuxt-icon"/>
        </a>
    </div>
    <section class="nameContainer">
        <div class='w-[600px]'>
            <div class="flex items-center">
                <img src="~/assets/svg/myName.svg" class="svg"/>
                <p class="subTitle">Frontend Developer</p>
            </div>
            <p class="mt-4">
                Estudiante de universidad de cuarto año.
                Dispuesto a aprender nuevas tecnologías.
                Ávido lector y amante de los lenguajes
                naturales y de programación.
            </p>
        </div>
        <img src="~/assets/img/selfie.webp" alt="Image"/>            
    </section> 
    <section class="techSection">
        <div class="headTitle">Tecnologías</div>
        <div class="flex justify-center space-x-10 mt-4 mb-16 flex-wrap gap-y-8">
            <div>
                <div class="i-ant-design:html5-filled text-3xl"/>
                <p>HTML5</p>
            </div>   
            <div>
                <div class="i-bxl:css3 text-3xl"/> 
                <p>CSS3</p>
            </div>
            <div>
                <div class="i-bxl:typescript text-3xl"/>
                <p>Typescript</p>
            </div>             
            <div>
                <div class="i-bxl:tailwind-css text-3xl"/>
                <p>Tailwind CSS</p>
            </div>
            <div>
                <div class="i-akar-icons:javascript-fill text-3xl"/>
                <p>Javascript</p>
            </div>
            <div>
                <div class="i-akar-icons:react-fill text-3xl"/>
                <p>React</p>
            </div>  
            <div>
                <div class="i-cib:laravel text-3xl"/>
                <p>Laravel</p>
            </div>            
            <div>
                <div class="i-akar-icons:vue-fill text-3xl"/>
                <p>Vue.js</p>
            </div>   
            <div>
                <div class="i-akar-icons:nextjs-fill text-3xl"/>
                <p>Next.js</p>
            </div>           
        </div>
    </section>     
    <section>
        <div class="headTitle text-center">Proyectos</div>
        <div class="flex flex-col items-center space-y-16 pb-16">
          <ProjectCard v-for="asd in data">
            <template #title>
              {{asd.title}}
            </template>
              <p>{{asd.description}}</p>
            <template #link>
              {{asd.repo || null}}
            </template>
            <template #live>
              {{asd.live || null}}
            </template>
          </ProjectCard>
        </div>
    </section>
  </div>
</template>

<script setup>
import ProjectCard from '~~/components/project-card.vue';
  const data = [
        {
            title:"Aguinaga's Lab",
            description:"Proyecto trabajado en React para un laboratorio de vacunas. Aplicación escrita en su totalidad bajo el paradigma de componentes funcionales.",
            stack: ['react', 'next', 'tailwind'],
            repo:"",
            live:"",
        },
        {
            title:"Portafolio",
            description:"Esta página recopila todos los trabajos y tecnologíasque domino. Diseñada con el propósito de darme a conocer al cliente.",
            stack: ['vue', 'nuxt'],
            repo:"https://github.com/Maginobion/personal-portfolio",
            live:"",
        },
        {
            title:"Pokemon CRUD",
            description:"Página sencilla que permite listar, buscar, agregar, eliminar y editar pokemones varios. Datos enlazados con una API que maneja la base de datos.",
            stack: ['react', 'jest', 'testing-library', 'tailwind'],
            repo:"https://github.com/Maginobion/pokemon-crud",
            live:"",
        },
    ]
    useHead({
      title: 'Home'
    })
</script>

<style scoped>
  .nameContainer img{
    width: 500px;
    border-radius: 1000px;
  }
  p{
    color: var(--color);
  }
  .nuxt-icon{
    content: var(--source);
    transition: 1s all;
    height: 20px;
    width: 20px;
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
</style>