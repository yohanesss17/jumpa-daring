<script setup>
</script>

<template>
  <router-view>
  </router-view>
</template>


<style>
@font-face {
  font-family: "Montserrat";
  src: url("./assets/font/Montserrat-Regular.ttf");
}

@font-face {
  font-family: "MontserratBold";
  src: url("./assets/font/Montserrat-Bold.ttf");
}


@font-face {
  font-family: "MontserratLight";
  src: url("./assets/font/Montserrat-Light.ttf");
}

* {
  font-family: "Montserrat";
}
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.slide-fade-reverse-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-reverse-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-reverse-enter-from,
.slide-fade-reverse-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>