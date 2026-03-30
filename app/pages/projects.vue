<template>
    <div>
        <MainTitle/>
        <p>{{ $t('working') }}</p>
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