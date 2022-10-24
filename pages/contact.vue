<template>
  <div>
    <div class="asd">
        <h1>{{$t("contactTitle")}}</h1>
        <p>
          {{$t("contactFirst")}}
        </p>
        <p>{{$t("contactSecond")}}</p>
        <p class="mt-4">{{$t("contactDirect")}}</p>
        <a href="mailto:1913010909@untels.edu.pe?Subject=Interesado%20en%20tu%20CV">
          1913010909@untels.edu.pe
        </a>
    </div>            
    <ContactCard/>
  </div>
</template>

<style scoped>

h1{
  position: relative;
  width: min-content;
}

h1::before{
  margin: 4px 0;
  animation-duration: 1s;
  animation-name: appear;
  transition-delay: 1s;
  content: '';
  display: block;
  height: 1px;
  width: 100%;
  border-bottom: 4px solid var(--color-secondary);
  border-radius: 2px;
}

h1::after{
  margin: 4px 0;
  animation-duration: 1s;
  animation-name: appear;
  transition-delay: 1s;
  content: '';
  display: block;
  height: 1px;
  width: 100%;
  border-bottom: 4px solid var(--color-secondary);
  border-radius: 2px;
}

@keyframes appear{
  from{
    width: 0;
  }
  to{
    width: 100%;
  }
}

</style>


<script setup>

useHead({
    title: 'Contact'
})
definePageMeta({
  pageTransition: {
    name: 'blur'
  }
})

</script>
