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
    padding: 20px;
    border: 1px solid black;
}
</style>