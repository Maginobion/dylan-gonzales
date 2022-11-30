<template>
  <div>
    <section class="infoContainer">
        <div class='w-[560px] p-4'>
            <div class="flex items-center">
                <nuxt-img 
                  src="/myName.svg" 
                  width=260px 
                  height=63.63px
                  placeholder
                  alt="Dylan Gonzales Logotype"
                />
                <p class="ml-4">Frontend Developer</p>
            </div>
            <p class="mt-4" v-t="'description'"></p>
            <a class="downloadButton" :href="url" download>
              <div class="i-ant-design:cloud-download-outlined text-3xl"/> <span v-t="'download'"/>
            </a> 
        </div>
        <nuxt-img 
          src="/selfie.webp" 
          width="260px" 
          height="260px" 
          alt="Dylan Gonzales Portrait"
          class="selfie"
        />         
    </section> 
    <section>
        <h4 class="headTitle" v-t="'techSubtitle'"/>
        <TechDisplay/>
    </section>     
    <section>
        <h4 class="headTitle" v-t="'projectSubtitle'"/>
        <div class="projectFlex">
          <ProjectDisplay/>
        </div>       
    </section>
    <div class="nuxtlogo">
      <span v-t="'madeWith'"/>
      <a href="https://v3.nuxtjs.org/" class="linkCont">
        <span>Nuxt 3</span>
        <img 
          class="nuxt-icon" 
          alt="Nuxt Framework Icon" 
          style="height: 20px; width: 20px;"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: `Time to showcase my skills. Let's start.` }
  ],
})

const url = computed(()=>locale.value==="en" ? '/[English]DylanGonzalesResume.pdf' : '/[Spanish]DylanGonzalesCV.pdf')

</script>

<style scoped>

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
  .nuxtlogo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 0 16px 0;
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
  .headTitle{
    text-align: center;
    padding: 12px 0;
  }
  section{
    min-height: 42vh;
    padding: 20px auto;
  }
  .downloadButton{
    display: flex;
    align-items: center;
    margin: 2rem auto;
    width: min-content;
    gap: 0.5rem;
    white-space: nowrap;
    padding: 6px 12px;
    border-radius: 6px;
    color: var(--glow);
    background-color: var(--bg-auxiliary);
    transition: 0.4s all ease-in-out;
  }
  .downloadButton:hover{
    background-color: var(--download-hover);
  }
  .projectFlex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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