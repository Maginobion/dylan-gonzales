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
                  <p class="ml-4">Software Engineer</p>
              </div>
              <p class="mt-4" v-t="'description'"></p>
              <a class="downloadButton" :href="url" download>
                <span class="i-ant-design:cloud-download-outlined text-3xl"/> <span v-t="'download'"/>
              </a> 
          </div>
          <div class="profile">
            <div class="circle">
              <nuxt-img
                src="/selfie.webp"
                width="260px"
                height="260px"
                alt="Dylan Gonzales Portrait"
                class="selfie"
              />
              <div class="bubbles">
                <a 
                  class="bubble bubble-left i-mdi:linkedin" 
                  href="https://www.linkedin.com/in/conexiondirecta/"
                />
                <a 
                  class="bubble bubble-center i-mdi:github-box"
                  href="https://github.com/Maginobion"
                />
                <NuxtLink
                  :to="localePath('/contact')" 
                  class="bubble bubble-right i-mdi:email-fast"
                />
              </div>
            </div>
          </div>
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
        <a href="https://www.linkedin.com/in/conexiondirecta/" class="linkCont">
          <span>Dylan Gonzales ©</span>
        </a>
        <a href="https://v3.nuxtjs.org/" class="linkCont">
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
  
  const { locale } = useI18n()
  const localePath = useLocalePath()
  
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
      transition: 0.2s all ease-in-out;
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

    /* empieza aca lo nuevo */ 

.circle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
}

.bubbles {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.bubble {
  width: 30px;
  height: 30px;
  transition: background-color 0.4s;
  background-color: #999;
}

.bubble:hover {
  transition: background-color 0.2s;
  background-color: var(--bg-auxiliary)
}

.bubble-left {
  position: absolute;
  transform: translateX(-50%) rotate(15deg) translateX(-30px);
}

.bubble-right {
  position: absolute;
  transform: translateX(50%) rotate(-15deg) translateX(30px);
}
  </style>