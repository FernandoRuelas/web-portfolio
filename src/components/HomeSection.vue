<template>
  <div id="home" class="d-flex flex-wrap justify-center" style="height: 90vh; gap:180px;">
    <div data-aos="fade-right" class="d-flex flex-column align-self-center align-start content-container" style="gap: 5px; min-width: 490px;">
      <div class="d-flex flex-column align-start" >
        <p class="mb-0 text">{{ $t("hi") }}</p>
        <p class="mb-0 text">Fernando R Ruelas</p>
      </div>

      <typewriter :replace="replace" :type-interval="100" :replace-interval="1000">
        <h1 class="text-1">{{ $t("webDeveloper") }}</h1>
      </typewriter>
      
      <div class="d-flex" style="gap: 5px">
        <v-btn outlined small fab color="indigo" target="_blank" href="https://www.instagram.com/fernando_ruelas03?igsh=MWZjNml4OG1ydDF4Ng==">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn outlined small fab color="indigo" target="_blank" href="www.linkedin.com/in/fernando-rodriguez-ruelas">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn outlined small fab color="indigo" target="_blank" href="https://github.com/FernandoRuelas">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </div>
      <div class="d-flex mt-3" style="gap: 30px">
        <v-btn
          color="primary"
           class="pa-5"
          @click="
            () => {
              this.$scrollTo('#contactMe');
            }
          "
          >{{ $t("contactMe") }}</v-btn
        >
        <v-btn color="primary" @click="downloadCV" outlined><v-icon>mdi-download</v-icon>{{ $t("downloadCV") }}</v-btn> 
        <!-- <button id="btn" @click="downloadCV"><v-icon color="primary">mdi-download</v-icon>{{ $t("downloadCV") }}</button> -->
      </div>

      <h2 class="primary--text text-2 mt-5">{{ $t("experience2Plus") }}</h2>
    </div>
    <div data-aos="fade-left"><v-img class="mi-imagen" src="../assets/img/Fernando.png"></v-img></div>
  </div>
</template>

<script>
import Typewriter from "typewriter-vue";
import "../style/GeneralStyle.css";

export default {
  name: "HomeSection",
  components: {
    Typewriter,
  },
  data: () => ({}),

  computed: {
    replace() {
      return [{ from: this.$t("webDeveloper"), to: this.$t("frontendDeveloper") }];
    },
  },
  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href = "/files/FernandoRodriguezRuelas_CV2025.pdf"; // Directly reference it from public folder
      link.download = "FernandoRodriguezRuelas_CV2025.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style>
.text-1 {
  font-size: clamp(25px, 4vw, 50px);
  color: #0000ff;
}

.text-2 {
  font-size: clamp(20px, 2vw, 34px);
}

#home {
  position: relative;
}

.text {
  color: #a9a3a3;
  font-weight: 700;
}

.content-container::before {
  content: "";
  position: absolute;
  width: 444px;
  height: 308px;
  margin-top: -56px;
  margin-left: -70px;
  background-color: rgba(0, 0, 225, 0.05);
  border-radius: 50%;
}

/* From Uiverse.io by zjssun */ 
button {
  padding: 8px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #2196F3;
  text-shadow: none;
  background: transparent;
  cursor: pointer;
  box-shadow: transparent;
  border: 1px solid #2196F3;
  transition: 0.5s ease;
  user-select: none;
}

#btn:hover {
  color: #ffffff;
  background: #006bb3; /* Un azul menos intenso */
  border: 1px solid #006bb3;
  text-shadow: 0 0 1px #ffffff; /* Menos shadow para el texto */
  box-shadow: 0 0 2px #006bb3, 0 0 10px #006bb3, 0 0 20px #006bb3;
}


#btn:hover i{
  color: #ffffff!important;
}


</style>
