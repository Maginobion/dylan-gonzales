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
        <div class='w-[560px] p-4'>
            <div class="flex items-center">
                <img src="~/assets/svg/myName.svg" width="260px" height="63.63px" style="width: 260px;" alt="Dylan Gonzales Logotype"/>
                <p class="ml-4">Frontend Developer</p>
            </div>
            <p class="mt-4">
              {{$t('description')}}
            </p>
        </div>
        <img src="~/assets/img/selfie.webp" width="260px" height="260px" alt="Dylan Gonzales Portrait" class="selfie"/>            
    </section> 
    <section class="techSection">
        <h4 class="headTitle">{{$t('techSubtitle')}}</h4>
        <TechDisplay/>
    </section>     
    <section>
        <h4 class="headTitle text-center">{{$t('projectSubtitle')}}</h4>
        <ProjectDisplay/>
    </section>
  </div>
</template>

<script setup>

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