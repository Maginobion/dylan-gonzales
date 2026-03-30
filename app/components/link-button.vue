<template>
    <NuxtLink v-if="content && link" :to="link" target="_blank">
        <button>
            <div :class="classProp"/>
            {{content}}
        </button>
    </NuxtLink>
    <button v-else-if="content" class="blocked" disabled>
        <div class="i-fluent:lock-closed-16-regular text-2xl"/>
        {{ content }}
        <span class="private-badge">Private</span>
    </button>
</template>

<script setup lang="ts">
    defineProps<{
        content?: string,
        link?: string,
        classProp?: string
    }>()
</script>

<style scoped>
    button{
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: var(--button);
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        color: var(--color);
        transition: 0.6s all;
    }
    a{
        text-decoration: none;
    }
    button:hover:not(.blocked){
        background-color: var(--button-hover);
    }
    button.blocked{
        opacity: 0.5;
        cursor: not-allowed;
    }
    .private-badge{
        font-size: 0.7em;
        padding: 1px 6px;
        border-radius: 3px;
        border: 1px solid var(--color);
        opacity: 0.7;
    }
</style>