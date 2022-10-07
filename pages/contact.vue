<template>
    <div>
        <div class="asd">
            <h1>¿Interesado?</h1>
            <p>
                Si tienes alguna pregunta sobre mí o mis proyectos, no dudes 
                en ponerte en contacto enviándome un correo.
            </p>
            <p>Déjame un comentario o pregunta y cuéntame qué es lo que quieres armar.</p>
            <p class="mt-4">Para contacto directo:</p>
            <a href="mailto:1913010909@untels.edu.pe?Subject=Interesado%20en%20tu%20CV">
                1913010909@untels.edu.pe
            </a>
        </div>            
        <form class="asd">
            <div class="w-[700px] bg-stone-800 rounded-lg">
                <div class="container flex flex-col space-y-4 p-4">
                    <div>
                        <p>Nombre:</p>
                        <input type="text" name="name">
                    </div>
                    <div>
                        <p>Correo:</p>
                        <input type="email" name="mail">
                    </div>
                    <div>
                        <p>Asunto:</p>
                        <input type="text" name="subject">
                    </div>
                    <div>
                        <p>Mensaje:</p>
                        <input type="text" name="message">
                    </div>
                    <input type="submit" value="Confirmar" class="mt-4">
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
useHead({
    title: 'Contact'
})
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>

<style scoped>
    
    .asd{
        color: white;
    }
</style>