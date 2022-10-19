<template>
    <div class="container">
        <h4>
            <slot name="title">Error</slot>
        </h4>
        <slot></slot>
        <div v-if="repoLink">
            Repositorio: <NuxtLink :to="repoLink">{{repoLink}}</NuxtLink>
        </div>
        <div v-if="liveLink">
            Live: <NuxtLink :to="liveLink">{{liveLink}}</NuxtLink>
        </div>        
    </div>
</template>

<script setup lang="ts">
    withDefaults(defineProps<{
        repoLink?: string,
        liveLink?: string
    }>(),{
        repoLink: '---',
        liveLink: '---'
    })
</script>

<style scoped>
.container{
    padding: 24px;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    margin: 10px auto;
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