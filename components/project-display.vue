<template>
    <TransitionGroup
        :appear="true"
        :persisted="true"
        name="asd"
    >
        <article
            v-for="asd in data"
            :key="asd.title"
            class="projectCard"
            ref="projectRef"
        >
            <span class="bg"></span>
            <nuxt-img 
                :src="asd.img" 
                :alt="asd.alt"
                class="image"
            />
            <div class="wholeContent">    
                <h1>{{asd.title}}</h1>
                <div class="techFlex">          
                    <div 
                        v-for="logo in asd.stack" 
                        :key="logo+asd.title"
                        :class="'i-'+tech[logo]+' text-2xl'"
                    />
                </div>
                <div class="content">
                    <p v-t="asd.description"/>
                    <div class="buttonFlex">
                        <LinkButton 
                            :link="asd.repo"
                            classProp="i-ant-design:github-filled text-2xl"
                            content="Repo"
                        /> 
                        <LinkButton 
                            :link="asd.live"
                            classProp="i-fluent:live-20-regular text-2xl"
                            content="Live"
                        />  
                    </div>
                </div>
            </div>       
        </article>
    </TransitionGroup>
</template>

<script setup lang="ts">

const projectRef = ref([])

onMounted(async()=>{
    await nextTick()

    const options = {
        threshold: 0.2
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('show')
            else entry.target.classList.remove('show')
        })
    }, options)
    projectRef.value.forEach(section => {
        observer.observe(section)
    })
})

const tech = {
  react: 'akar-icons:react-fill',
  rtl: 'simple-icons:testinglibrary',
  next: 'akar-icons:nextjs-fill',
  tailwind: 'bxl:tailwind-css',
  jest:'file-icons:jest',
  nuxt: 'mdi:nuxt',
  laravel: 'cib:laravel',
  vue: 'akar-icons:vue-fill'
}

const data = [
    {
        title:"Foxbel Music",
        description:"foxbelDesc",
        img: "/foxbel.webp",
        alt: "Spotify-like web application",
        stack: ['vue', 'tailwind'],
        repo:"https://github.com/Maginobion/foxbel-music",
        live:"https://shiny-bienenstitch-665b69.netlify.app/",
    },
    {
        title:"Aguinaga's Lab",
        description:"aguinagaDesc",
        img: "/aguina.webp",
        alt: "Medical web platform",
        stack: ['react', 'next', 'tailwind'],
        repo:"",
        live:"",
    },
    {
        title:"Pokemon CRUD",
        description:"pokemonDesc",
        img: "/poke.webp",
        alt: "Pokemon-creating web application",
        stack: ['react', 'jest', 'rtl', 'tailwind'],
        repo:"https://github.com/Maginobion/pokemon-crud",
        live:"https://pokemon-crud-bice.vercel.app/",
    },
    {
        title:"Portafolio V2",
        description: "portfolioDesc",
        img: "/portfolio.webp",
        alt: "Medical web platform",
        stack: ['vue', 'nuxt'],
        repo:"https://github.com/Maginobion/nuxt-portfolio",
        live:"https://nuxt-portfolio-xi.vercel.app/",
    },
    {
        title:"Portafolio V1",
        description:"portfolioDesc",
        img: "/portfolio.webp",
        alt: "Medical web platform",
        stack: ['vue', 'laravel'],
        repo:"https://github.com/Maginobion/personal-portfolio",
        live:"",
    },
]


</script>

<style scoped>
.projectCard{
    --opacity: 0.6;
    --duration: 0.4s;
    opacity: 0;
    translate: -80% 0;
    filter: blur(4px);
    padding-left: 36px;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    position: relative;
    width: 800px;
    height: 500px;
    overflow: hidden;
    transition: opacity 0.4s ease-in-out, filter 0.4s ease-in-out, translate 0.4s ease-in-out;
}
.projectCard.show{
    opacity: 1;
    filter: blur(0);
    translate: 0;
}
.bg{
    transition: all var(--duration) ease-in-out;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--slider-1) 0%, var(--slider-2) 50%, var(--slider-3) 60%, transparent 100%);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: var(--opacity);
}
.projectCard:hover .bg{
    --opacity: 1;
}

.image{
    position: absolute;
    z-index: -2;
    left: 0;
    top: 0;
    width: 100%;
}
.techFlex{
    display: flex;
    gap: 24px;
}
.content{
    height: 0;
    overflow: hidden;
    width: 400px;
    transition: var(--duration) margin-left ease-in-out, var(--duration) height ease-in-out;
}
.wholeContent{
    transition: var(--duration) margin-left ease-in-out, var(--duration) height ease-in-out;
}

.projectCard:hover .content{
    height: 200px;
    margin-left: 20px;
}
.projectCard:hover .wholeContent{
    margin-left: 40px;
}
h1{
    margin-top: 160px;
}
.buttonFlex{
    display: flex;
    gap: 14px;
}

@media screen and (max-width: 900px){
    h1{
        margin: 0;
    }
    .projectCard{
        font-size: 0.8em;
        width: 80vw;
        height: min-content;
        padding: 0;
    }
    .image{
        position: initial;
    }
    .wholeContent{
        padding: 10px 16px 24px 28px;
    }
    .content{
        width: initial;
        height: min-content;
    }
    .projectCard:hover .content{
        height: initial;
        margin-left: 0;
    }
    .projectCard:hover .wholeContent{
        margin-left: 0;
    }
}

@media(prefers-reduced-motion){
    .projectCard{
        transition: none;
    }
}
</style>