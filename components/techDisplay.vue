<template>
    <div class="projects">
        <div class="centered" v-for="tech in techStack" :key="tech.label">
            <div :class="tech.class + ' text-3xl'"/>
            <p>{{tech.label}}</p>
        </div>
    </div>   
</template>

<script setup lang="ts">
// defineProps<{
//     techStack: {
//         class: string,
//         label: string
//     }[],
// }>()

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
    class: 'i-bxl:javascript',
    label: 'Javascript'
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
    class: 'i-file-icons:styledcomponents',
    label: 'Styled Components'
  },
  {
    class: 'i-akar-icons:node-fill',
    label: 'Node JS'
  },
  {
    class: 'i-simple-icons:mongodb',
    label: 'MongoDB'
  },
  {
    class: 'i-akar-icons:react-fill',
    label: 'React'
  },
  {
    class: 'i-file-icons:jest',
    label: 'Jest'
  },
  {
    class: 'i-simple-icons:testinglibrary',
    label: 'RTL'
  },
  {
    class: 'i-akar-icons:vue-fill',
    label: 'Vue 3'
  },
  {
    class: 'i-mdi:nuxt',
    label: 'Nuxt'
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

</script>

<style scoped>
.projects{
    width: 100%;
    display: grid;
    justify-self: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
}
.centered{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>