<template>
    <EffectButton 
        @click="isOpen=true" 
        class="iconCont"
        aria-label="open navigation bar"
    >
        <i class="backButton i-charm:menu-hamburger text-3xl"></i>
    </EffectButton>
    <nav :class="{activeSideNav : isOpen}" class="sideNav">
        <ul class="navList">
            <li><NuxtLink to="/" data-label="Home">Home</NuxtLink></li>
            <li><NuxtLink to="/about" data-label="About">About</NuxtLink></li>
            <li><NuxtLink to="/projects" data-label="Projects">Projects</NuxtLink></li>
            <li><NuxtLink to="/contact" data-label="Contact">Contact</NuxtLink></li>
        </ul>
        <div class="exitCont">
            <EffectButton 
                class="iconCont right" 
                @click="isOpen=false" 
                aria-label="close navigation bar"
            >
                <i class="i-eva:arrow-back-fill text-3xl"></i>
            </EffectButton>
        </div>       
    </nav>
</template>

<script setup>

const isOpen = ref(false)

</script>


<style scoped>
.backButton{
    padding: 0;
}
.sideNav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: var(--bg-secondary);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    transition: all 0.3 ease-in-out;
}

.activeSideNav{
    width: 320px;
}

.stylingCont{
    display: flex;
    flex-direction: column;
}

.iconCont{
    padding-top: 2px;
}

.iconCont i{
    color: var(--color);
    display: flex;
    align-items: center; 
}

.exitCont{
    display: flex;
    justify-content: flex-end;
}
.right{
    margin-right: 10px;  
}

button{
    border: 0;
}

ul{
    margin: 0;
    padding: 0;
}

.navList li{
    list-style-type: none;
}

.navList a{
    color: white;
    text-decoration: none;
    width: 100%;
    height: 100%;
}

.navList a{
    padding: 12px 12px 12px 32px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 25px;
    color: var(--color);
    position: relative;
}

.navList a::before{
    content: attr(data-label);
    position: absolute;
    left: 0;
    background-origin: content-box;
    background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255));
    color: black;
    width: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100%;
    padding-left: 32px;
    transition: all 0.7s ease-in-out;
}

.navList a:hover::before{
    width: 380px;
}

.iconCont:hover{
    cursor: pointer;
}

@media screen
and (max-width: 1080px) {
    .activeSideNav{
    width: 100%;
    }
    
}

</style>

