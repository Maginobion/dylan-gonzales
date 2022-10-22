<template>
    <form class="asd">
      <div class="container">
        <div class="inputBlock">       
          <input 
            type="text"
            placeholder="Nombre"
            name="name"
            id="name"
            v-model="name">
            <label for="name">Nombre</label>
        </div>
        <div class="inputBlock">         
            <input 
                type="text"
                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}"
                name="mail" 
                placeholder="Correo"
                id="mail" 
                v-model="email">
            <label for="mail">Correo</label>
        </div>
        <div class="inputBlock">         
          <input 
            type="text" 
            name="subject" 
            placeholder="Asunto"
            id="subject" 
            v-model="subject">
            <label for="subject">Asunto</label>
        </div>
        <div class="inputBlock">          
            <textarea 
                type="text" 
                name="message" 
                placeholder="Mensaje"
                id="message"
                
                v-model="message"/>
            <label for="message">Mensaje</label>
        </div>
        <button @click.prevent="send">Confirmar</button>
        <div class="status">
            <ul>
                <li class="errors" v-for="error in status">{{error}}</li>
                <li v-if="success" class="success">{{success}}</li>
            </ul> 
        </div> 
      </div>
    </form>
</template>

<style scoped>

.asd{
    padding: 2rem 8rem;
}

.container{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2.5rem;
}

label{
    position: absolute;
    top: 0;
    transition: 0.2s all ease-in-out;
}

.inputBlock input, 
.inputBlock textarea{
    position: relative;
    width: 100%;
    padding: 4px 10px;
    z-index: 1;
    resize: none;
}

.inputBlock{
    position: relative;
}
.inputBlock:focus-within input:placeholder-shown + label,
.inputBlock:focus-within textarea:placeholder-shown + label {
    color: var(--bg);
    background-color: var(--error-color);
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 2px 6px;
    translate: 0 -26px;
}



input:not(:placeholder-shown):valid + label, 
textarea:not(:placeholder-shown):valid + label{
    color: var(--bg);
    background-color: var(--color);
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 2px 7px;
    translate: 0 -26px;
    background-color: var(--color-primary);
}

input:not(:placeholder-shown):valid + label::after, 
textarea:not(:placeholder-shown):valid + label::after{
    transition: all 1s ease-in-out;
    content: '✓';
    font-size: calc(1em - 1px);
    margin: 0 1px 0 10px;
}

input:not(:placeholder-shown):invalid + label, 
textarea:not(:placeholder-shown):invalid + label{
    color: var(--bg);
    background-color: var(--color);
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 2px 6px;
    translate: 0 -26px;
    background-color: var(--error-color);
}

input::placeholder,
textarea::placeholder{
    --translating: 0 0;
    position: absolute;
    transition: 0.4s all ease-in-out;
    translate: var(--translating);
}

.inputBlock:focus-within input::placeholder,
.inputBlock:focus-within textarea::placeholder{
    --translating: 0 -26px;
    animation-name: hide;
    animation-duration: 1s;
    animation-direction: alternate;
}

button{
    width: min-content;
    padding: 6px 18px;
    margin: auto;
    color: var(--color);
    background-color: var(--color-primary);
    border: 0;
    border-radius: 2px;
}

textarea{
  font-family: Arial, Helvetica, sans-serif;
}
.errors{
  color: var(--error-color);
}
.success{
  color: var(--success-color);
}

@keyframes hide{
    0%{
        --translating: 0 0;
    }
    99%{
        --translating: 0 -26px;
    }
    100%{
        display: none;
    }
}

</style>

<script setup>

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

const regexString = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}'
const emailRegex = new RegExp(regexString,'g')

const send = async () =>{
  status.value=[]
  if(name.value==='') status.value.push('Ingrese un nombre.')
  if(email.value==='') status.value.push('Ingrese un correo.')
  else if(!emailRegex.test(email.value)) status.value.push('Ingrese correctamente su email.')
  if(subject.value==='') status.value.push('Ingrese un asunto.')
  if(message.value==='') status.value.push('Ingrese el contenido del mensaje.')
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