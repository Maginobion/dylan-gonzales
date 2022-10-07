<template>
  <div>
  <div class="made mt-[50px]">
      <p>This site was made with Nuxt</p> 
      <x-fab-laravel class="lv-icon"/>
  </div>
  <div id="app">
      <Presentation/>
  </div>
  <section class="nameContainer flex-center space-x-14 pt-[100px] flex-wrap-reverse">
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
  <section class="flex flex-col items-center mt-16">
      <div class="headTitle">Tecnologías</div>
      <div class="flex justify-center space-x-10 mt-4 mb-16 flex-wrap gap-y-8">
          <div class="flex items-center space-x-4">
              <x-icomoon-html-five class="techSize"/>
              <p>HTML5</p>
          </div>   
          <div class="flex items-center space-x-4">
              <x-si-css3 class="techSize"/> 
              <p>CSS3</p>
          </div>                  
          <div class="flex items-center space-x-4">
              <x-bxl-tailwind-css class="techSize"/>
              <p>Tailwind CSS</p>
          </div>
          <div class="flex items-center space-x-4">
              <x-si-javascript class="techSize"/>
              <p>Javascript</p>
          </div>
          <div class="flex items-center space-x-4">
              <x-fab-laravel class="techSize"/>
              <p>Laravel</p>
          </div>
          <div class="flex items-center space-x-4">
              <x-fab-react class="techSize"/>
              <p>React</p>
          </div>    
          <div class="flex items-center space-x-4">
              <x-si-vuedotjs class="techSize"/>
              <p>Vue.js</p>
          </div>   
          <div class="flex items-center space-x-4">
              <x-fileicon-nextjs class="techSize"/>
              <p>Next.js</p>
          </div>           
      </div>
  </section>     
  <section>
      <div class="headTitle text-center">Proyectos</div>
      <div class="flex flex-col items-center space-y-16 pb-16">
        <div v-for="asd in data">
          <slot name="title">
            {{asd.title}}
          </slot>
          <slot name="description">
            {{asd.description}}
          </slot>
          <slot name="repo">
            {{asd.repo}}
          </slot>
          <slot name="live">
            {{asd.live}}
          </slot>
        </div>
      </div>
  </section>
  </div>
</template>

<script setup>
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
  img.svg{
    filter: var(--color);
    clip-path: var(--color);
    stroke: var(--color);
  }
</style>