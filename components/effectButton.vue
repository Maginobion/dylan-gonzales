<template>
    <button class="container">
        <slot/>
    </button>
</template>

<style scoped>
.container{
    position: relative;
    padding: 0px;
    background-color: transparent;
}

/* .container span{
    --left-down : -10%;
    --right-up: 10%;
    background-color: var(--color);
    border: 1px solid var(--color-primary);
    width: 4px;
    height: 4px;
    border-radius: 100%;
    position: absolute;
    scale: 1;
} */

.container:before {
  content: '';
  background-color: var(--color-secondary);
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: scale(0.001, 0.001);
  transform: scale(0.001, 0.001);
}

.container:focus {
  outline: 0;
  color: #fff;
}
.container:focus:before {
  -webkit-animation: Click_Effect 0.8s ease-out;
          animation: Click_Effect 0.8s ease-out;
}
@-webkit-keyframes Click_Effect {
  50% {
    -webkit-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    -webkit-transform: scale(0.001, 0.001);
    transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(0.001, 0.001);
    transform: scale(0.001, 0.001);
    opacity: 1;
  }
}
@keyframes Click_Effect {
  50% {
    -webkit-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    -webkit-transform: scale(0.001, 0.001);
    transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(0.001, 0.001);
    transform: scale(0.001, 0.001);
    opacity: 1;
  }
}

/* .container:active span{
    animation: appearing 0.4s linear;
} */

@keyframes appearing {
    0%{
        scale: 0;
    }
    50%{
        --left-down : -10%;
        --right-up: 10%;
        scale: 1;
    }
    100%{
        --left-down : 0%;
        --right-up: 0%;
        scale: 0;
    }
}

/* .container span:nth-child(2){
    top: 12%;
    right: -10%;
    translate: -250% 160%;
}
.container span:nth-child(3){
    top: 0%;
    left: 50%;
    translate: -50% -50%;
}
.container span:nth-child(4){
    top: 12%;
    right: 90%;
}
.container span:nth-child(5){
    bottom: 10%;
    right: -10%;
}
.container span:nth-child(6){
    bottom: 0%;
    left: 50%;
    translate: -50% 50%;
}
.container span:nth-child(7){
    bottom: 10%;
    right: 90%;
} */
</style>