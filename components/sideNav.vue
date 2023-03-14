<template>
    <EffectButton 
        @click="isOpen=true" 
        class="opener iconCont"
        aria-label="open navigation bar"
    >
        <i class="backButton i-charm:menu-hamburger text-3xl"></i>
    </EffectButton>  
    <nav :class="{activeSideNav : isOpen}" class="sideNav">       
        <ul class="navList">
            <li><NuxtLink :to="localePath('/')" :data-label="$t(`menu[0]`)" v-t="'menu[0]'"/></li>
            <li><NuxtLink :to="localePath('/about')" :data-label="$t(`menu[1]`)" v-t="'menu[1]'"/></li>
            <li><NuxtLink :to="localePath('/projects')" :data-label="$t(`menu[2]`)" v-t="'menu[2]'"/></li>
            <li><NuxtLink :to="localePath('/contact')" :data-label="$t(`menu[3]`)" v-t="'menu[3]'"/></li>
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
    <div class="fader"/>
</template>

<script setup>

const isOpen = ref(false)
const localePath = useLocalePath()

</script>


<style scoped>

.opener{
    position: fixed;
}
.fader{
    transition: all 0.3s ease-in-out;
    width: 0;
    height: 0;
}
.activeSideNav + .fader{
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;    
    width: 320px;
    height: 100%; 
    backdrop-filter: blur(4px);
}

.backButton{
    padding: 0;
}
.sideNav {
    opacity: 0.8;
    height: 100%;
    width: 320px;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    background-color: var(--bg-secondary);
    overflow-x: hidden;
    padding-top: 60px;
    translate: -320px 0;
    transition: all 0.3s ease-in-out;
}

.activeSideNav{
    translate: 0;
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
    margin: 20px 10px 0 0;  
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
    white-space: nowrap;
}

.navList a{
    padding: 12px 12px 12px 32px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 25px;
    color: var(--color);
    position: relative;
    transition: background-color 0.4s ease-in-out;
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
    white-space: nowrap;
    height: 100%;
    padding-left: 32px;
    transition: all 0.7s ease-in-out;
}

.navList a:hover::before{
    width: 380px;
}

.router-link-exact-active{
    background-color: var(--button-hover);
}

.iconCont:hover{
    cursor: pointer;
}

@media screen
and (max-width: 1080px) {
    .activeSideNav{
        width: 100%;
    }
    .activeSideNav + .fader{
        width: 100%;
    }
}

</style>

