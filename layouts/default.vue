<template>
    <div>
        <div class="uprightCont">
            <LangChanger/>
            <button
                :class="icon + ' themeSwitcher'" 
                @click="$emit('change-theme')"
                aria-label="theme button"
            />         
        </div>               
        <SideNav/>
        <div class="totalCenter">
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">

const a = defineProps<{
    icon: string
}>()

</script>

<style scoped>

.totalCenter{
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
}

.themeSwitcher{
    font-size: 1.875rem;
}

.uprightCont{
    position: fixed;
    right: 10px;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

</style>