<template>
    <v-btn
      v-show="showButton"
      fab
      fixed
      bottom
      right
      color="primary"
      @click="scrollToTop"
    >
      <!-- Barra de progreso circular -->
      <v-progress-circular
        :rotate="-90"
        :size="56"
        :width="5"
        :value="scrollProgress"
        color="white"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-progress-circular>
    </v-btn>
  </template>
  


  <script>
  export default {
    data() {
      return {
        showButton: false,
        scrollProgress: 0, // Guarda el porcentaje del scroll
      };
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.updateScroll);
    },
    methods: {
      updateScroll() {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        this.scrollProgress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0;
        this.showButton = scrollTop > 100; // Muestra el botón después de 100px
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
  };
  </script>
  