<template>
    <div class="projects">
        <div class="centered" v-for="tech in techStack" >
            <div :class="tech.class + ' text-3xl'"/>
            <p>{{tech.label}}</p>
        </div>
    </div>   
</template>

<script setup lang="ts">
defineProps<{
    techStack: {
        class: string,
        label: string
    }[],
}>()
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