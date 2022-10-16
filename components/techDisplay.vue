<template>
    <div class="centered" v-for="tech in techStack" >
        <div :class="tech.class + ' text-3xl'"/>
        <p>{{tech.label}}</p>
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
.centered{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>