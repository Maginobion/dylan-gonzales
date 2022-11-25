<template>
    <div>
        <div class="uprightCont">
            <LangChanger/>
            <ThemeSwitcher/>
        </div>               
        <SideNav/>
        <div class="totalCenter">
            <slot/>
        </div>
    </div>
</template>

<style scoped>

.totalCenter{
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
}

.uprightCont{
    position: fixed;
    overflow: hidden;
    z-index: 10;
    right: 10px;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--color-primary);
    padding: 6px 10px;
    border-radius: 8px;
}

@media screen and (max-width:500px) {
    .totalCenter{
        padding: 10px 40px;
    }
}

</style>