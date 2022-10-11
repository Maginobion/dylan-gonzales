<template>
    <div class="container">
        <p>
            <slot name="title">Error</slot>
        </p>
        <slot></slot>
        <p>
            <slot name="link">Error</slot>
        </p>
        <p>
            <slot name="live">Error</slot>
        </p>
    </div>
</template>

<style scoped>
.container{
    border: 1px solid black;
}
</style>