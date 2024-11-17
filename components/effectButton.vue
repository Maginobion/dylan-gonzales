<template>
    <button class="containerButton">
        <slot/>
    </button>
</template>

<style scoped>
.containerButton{
    position: relative;
    padding: 0px;
    background-color: transparent;
}

/* .containerButton span{
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

.containerButton:before {
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

.containerButton:focus {
  outline: 0;
  color: #fff;
}
.containerButton:focus:before {
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

/* .containerButton:active span{
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

/* .containerButton span:nth-child(2){
    top: 12%;
    right: -10%;
    translate: -250% 160%;
}
.containerButton span:nth-child(3){
    top: 0%;
    left: 50%;
    translate: -50% -50%;
}
.containerButton span:nth-child(4){
    top: 12%;
    right: 90%;
}
.containerButton span:nth-child(5){
    bottom: 10%;
    right: -10%;
}
.containerButton span:nth-child(6){
    bottom: 0%;
    left: 50%;
    translate: -50% 50%;
}
.containerButton span:nth-child(7){
    bottom: 10%;
    right: 90%;
} */
</style>