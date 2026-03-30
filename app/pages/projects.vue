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
        { name: 'description', content: 'Projects by Dylan Gonzales — React, Vue, Next.js, and more. From fintech platforms to IoT dashboards.' },
    ],
})
</script>