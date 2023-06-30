<template>
  <div class="asd">
      <h1 v-t="'contactTitle'"/>
      <p v-t="'contactFirst'"/>
      <p v-t="'contactSecond'"/>
      <p class="mt-4" v-t="'contactDirect'"/>
      <a href="mailto:1913010909@untels.edu.pe?Subject=Interesado%20en%20tu%20CV">
        1913010909@untels.edu.pe
      </a>
      <ContactCard/>
  </div>            
</template>

<style scoped>

.asd{
  padding: 1rem 2rem;
}

h1{
  position: relative;
  width: min-content;
  margin-top: 60px;
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

@media screen and (max-width:500px){
  .asd{
    width: 100%;
  }
}

</style>


<script setup>

useHead({
    title: 'Contact',
    meta: [
        { name: 'Contact', content: 'Drop me a line. Are you ready for showtime?' }
    ],
})

</script>
