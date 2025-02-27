<template>
    <div id="contactMe">
      <v-row class="d-flex align-center" style="margin: 0px 50px">
        <v-col cols="12">
          <formulario-section></formulario-section>
        </v-col>
        
      </v-row>
      <v-row style="background-color: blue" aling="center" class="pa-5">
        <!-- Primer elemento: Facebook -->
        <!-- <v-col cols="12" sm="6" md="3" class="d-flex align-center justify-center mb-3">
          <v-icon color="white">mdi-facebook</v-icon>
          <a class="white--text mb-0 ml-2" href="https://www.facebook.com/share/12B8e4gqzmk/?mibextid=wwXIfr" target="_blank"
            >fernando_ruelas03</a
          >
        </v-col> -->
  
        <!-- Segundo elemento: Instagram -->
        <v-col cols="12" sm="6" md="4" class="d-flex justify-center align-center mb-3">
          <v-icon color="white">mdi-instagram</v-icon>
          <a class="white--text mb-0 ml-2" target="_blank" href="https://www.instagram.com/psic_ruelas?igsh=MTNxeng3c3o2am5pMQ=="
            >fernando_ruelas03</a
          >
        </v-col>
  
        <!-- Tercer elemento: Email -->
        <v-col cols="12" sm="6" md="4" class="d-flex justify-center align-center mb-3" @click="sendEmail">
          <v-icon color="white">mdi-email</v-icon>
          <a class="white--text mb-0 ml-2">fernandor.ruelas@gmail.com</a>
        </v-col>
  
        <!-- Cuarto elemento: Phone -->
        <v-col cols="12" sm="6" md="4" class="d-flex justify-center align-center mb-3">
          <v-icon color="white">mdi-phone</v-icon>
          <p class="white--text mb-0 ml-2" @click="call">6221562893</p>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import FormularioSection from "./FormularioSection.vue"
  export default {
    name: "ContactUs",
    props: {},
    components: {
        FormularioSection,
    },
  
    data: () => ({}),
    methods: {
      call() {
        if (this.$vuetify.breakpoint.xs) {
          window.location.href = `tel:6221562893`;
        }
      },
  
      sendEmail() {
        const email = "fernandor.ruelas@gmail.com";
        const subject = encodeURIComponent("Trabajo");
        const body = encodeURIComponent("¡Hola! Me comunico desde tu portafolio web.");
  
        const deviceType = this.detectDevice();
        if (deviceType == "mobile") {
          window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        } else {
          const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
          const link = document.createElement("a");
          link.href = gmailUrl;
          link.target = "_blank";
          link.click();
        }
      },
  
      detectDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes("mobi") || userAgent.includes("android") || userAgent.includes("iphone")) {
          return "mobile";
        } else {
          return "desktop";
        }
      },
    },
  };
  </script>
  