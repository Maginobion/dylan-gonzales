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
      <div class="container flex flex-col space-y-4 p-4">
        <div>
          <label for="name">Nombre:</label>
          <input type="text" name="name" id="name" v-model="name">
        </div>
        <div>
          <label for="mail">Correo:</label>
          <input type="email" name="mail" id="mail" v-model="email">
        </div>
        <div>
          <label for="subject">Asunto:</label>
          <input type="text" name="subject" id="subject" v-model="subject">
        </div>
        <div>
          <label for="message">Mensaje:</label>
          <textarea type="text" name="message" id="message" v-model="message"/>
        </div>
        <button @click.prevent="send">Confirmar</button>
        <p class="errors" v-for="error in status">{{error}}</p>
        <p class="success">{{success}}</p>
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

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const status = ref([])
const success = ref('')

watch(name,()=>{
  status.value=[]
})
watch(email,()=>{
  status.value=[]
})
watch(subject,()=>{
  status.value=[]
})
watch(message,()=>{
  status.value=[]
})

const send = async () =>{
  status.value=[]
  if(name.value==='') status.value.push('Ingresa un nombre.')
  if(email.value==='') status.value.push('Ingresa un email.')
  if(subject.value==='') status.value.push('Ingresa un asunto.')
  if(message.value==='') status.value.push('Ingresa el contenido del mensaje.')
  if(status.value.length===0){
    const result = await $fetch('/api/mailer',{
      method: 'POST',
      body:{
        name: name.value,
        email: email.value,
        text: message.value,
        subject: subject.value
      }
    }).catch(err=>console.log(err))
    const resultStatus = result.accepted.length>0 ?
    '¡Mensaje recibido! Nos pondremos en contacto.' :
    'Hubo un error al enviar el mensaje. Inténtalo otra vez.'
    success.value = resultStatus
  }
}
</script>

<style scoped>
textarea{
  font-family: Arial, Helvetica, sans-serif;
}
.errors{
  color: var(--error-color);
}
.success{
  color: var(--success-color);
}
</style>