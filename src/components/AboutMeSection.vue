<template>
  <div id="aboutMe" class="d-flex flex-column justify-center">
    <h1 class="text-1-subtitle mb-10" data-aos="fade-up">{{ $t("aboutMe") }}</h1>

    <v-row class="customBlue content mt-5">
      <v-col cols="12" md="4" sm="12" class="d-flex justify-center pa-0" data-aos="fade-right">
        <v-img src="../assets/img/FernandoRuelas1.png" max-height="400" max-width="300" style="margin-top: -77px"></v-img>
      </v-col>
      <v-col cols="12" md="8" sm="12" class="justify-start flex-column align-start" data-aos="fade-left">
        <v-row class="justify-start flex-column align-start">
          <v-col cols="12">
            <p class="mb-0 text-responsive">
              {{ $t("aboutMeDes") }}
            </p>
          </v-col>
          <v-col cols="12" class="d-flex center-button-movile">
            <v-btn color="primary" outlined @click="downloadCV"><v-icon>mdi-download</v-icon>{{ $t("downloadCV") }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  
    <v-row class="mt-7">
      <vue-marquee-slider id="marquee-slider" :speed="20000" :width="100" :space="50">
          <div class="d-flex flex-column align-center"  v-for="(item, index) in insicnias" :key="index">
            <v-icon v-if="item.icon" :color="item.color">{{ item.icon }}</v-icon>
            <v-img v-else :src="item.img" class="mi-imagen" max-height="25px" max-width="25px"></v-img>
            <p class="body-1 mb-0">{{ item.name }}</p>
          </div>
      </vue-marquee-slider>
    </v-row>
    <v-row class="mt-5">
      <vue-marquee-slider id="marquee-slider-2" :speed="20000" width="100%" reverse :space="50">
          <div class="d-flex flex-column align-center" v-for="(item, index) in tools" :key="index">
            <v-icon v-if="item.icon" :color="item.color">{{ item.icon }}</v-icon>
            <v-img v-if="!item.icon" :src="item.img" class="mi-imagen" max-height="25px" max-width="25px"></v-img>
            <p class="body-1 mb-0">{{ item.name }}</p>
          </div>
      </vue-marquee-slider>
    </v-row>

    <v-row class="pa-10">
      <v-col cols="12">
        <h1 class="text-2-subtitle" data-aos="zoom-in">
          {{ $t("achievementsWork") }}
        </h1>
      </v-col>
      <v-cols cols="12" v-for="(item, index) in achievements" :key="index" data-aos="flip-up">
        <v-alert :icon="item.icon" prominent text type="info">
          <strong> {{ item.title }} : </strong> {{ item.text }}
        </v-alert>
      </v-cols>
    </v-row>

    <experience-section></experience-section>
  </div>
</template>

<script>
import "../style/GeneralStyle.css";
import ExperienceSection from "./ExperienceSection.vue";

export default {
  name: "HomeView",
  components: {
    ExperienceSection,
  },
  data: () => ({
    insicnias: [
      { img: null, name: "Vue", icon: "mdi-vuejs", color: "green", level:"avanzado"},
      { img: null, name: "Vuetify 2", icon: "mdi-vuetify", color: "blue", level:"avanzado"},
      { img: null, name: "JS", icon: "mdi-language-javascript", color: "yellow", level:"avanzado" },
      { img: null, name: "CSS", icon: "mdi-language-css3", color: "blue", level:"avanzado" },
      { img: null, name: "HTML 5", icon: "mdi-language-html5", color: "orange", level:"avanzado" },
      { img: null, name: "Bootstrap", icon: "mdi-bootstrap", color: "purple", level:"avanzado" },
      { img: null, name: "React", icon: "mdi-react", color: "blue", level:"Basic" },
      { img: null, name: "Responsive Design", icon: "mdi-responsive", color: "blue", level:"avanzado" },
      { img: null, name: "Git", icon: "mdi-git", color: "orange", level:"Medium" },
      { img: require("../assets/img/technologies/Google_Maps_Logo.png"), name: "google maps", icon: null, color: null, level:"Medium" },
    ],

    tools: [
      { img: null, name: "Visual Studio Code", icon: "mdi-microsoft-visual-studio-code", color: "blue" },
      { img: null, name: "Visual Studio", icon: "mdi-microsoft-visual-studio", color: "purple" },
      { img: require("../assets/img/tools/figma.png"), name: "Figma", icon: "fab fa-figma", color: "pink" },
      { img: require("../assets/img/tools/postman.png"), name: "postman", icon: null, color: null },
    ],
  }),
  computed: {
    achievements() {
      return [
        { title: this.$t("achievementsWork1Title"), text: this.$t("achievementsWork1Des"), icon: "mdi-puzzle" },
        { title: this.$t("achievementsWork2Title"), text: this.$t("achievementsWork2Des"), icon: "mdi-file-document-alert-outline" },
        { title: this.$t("achievementsWork3Title"), text: this.$t("achievementsWork3Des"), icon: "mdi-monitor-dashboard" },
        { title: this.$t("achievementsWork4Title"), text: this.$t("achievementsWork4Des"), icon: "mdi-lightning-bolt" },
      ];
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
.background {
  position: absolute;
  width: 100%;
  height: 45vh;
}
.container-info {
  position: absolute;
}

/* .content {
  height: 40vh;
} */

.text-responsive {
    text-align: start !important;
  }

@media (max-width: 959px) {
  .text-responsive {
    text-align: center !important;
    padding-inline: 15px;
  }

  .center-button-movile{
    justify-content: center;
  }
}

/* Define styles for larger screens */
/* @media (min-width: 960px) {
  .text-start-on-desktop {
    text-align: start !important;
  }
} */
</style>
