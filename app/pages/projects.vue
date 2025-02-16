<template>
    <div>
        <MainTitle/>
        <p v-t="'working'"/>
        <Falling/>
    </div>
</template>

<script setup>
useHead({
    title: 'Projects',
    meta: [
        { name: 'Projects', content: 'My amazing projects.' }
    ],
})
</script>