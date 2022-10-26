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
            <p class="mt-4">
              {{$t('description')}}
            </p>
            <a :href="url" download class="downloadButton">
              <div class="i-ant-design:cloud-download-outlined text-3xl"/>{{$t("download")}}
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
        <h4 class="headTitle">{{$t('techSubtitle')}}</h4>
        <TechDisplay/>
    </section>     
    <section>
        <h4 class="headTitle">{{$t('projectSubtitle')}}</h4>
        <ProjectDisplay/>
    </section>
    <div class="nuxtlogo">
      <span>{{$t("madeWith")}}</span> 
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

const t = useI18n()

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const url = computed(()=>t.locale.value==="en" ? '/assets/files/[English]DylanGonzalesPortafolio.pdf' : '/assets/files/[Spanish]DylanGonzalesCV.pdf')

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
    margin: 20px;
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