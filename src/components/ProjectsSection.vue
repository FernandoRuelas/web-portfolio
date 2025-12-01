<template>
  <div id="projects" class="d-flex flex-column justify-center" data-aos="fade-up">
    <h1 class="text-1-subtitle">{{ $t("personalProjects") }}</h1>
    <p class="text-2-subtitle">{{ $t("thereAreMyPersonalProjects") }}</p>

    <v-tabs v-model="tab" centered background-color="card" data-aos="fade-up">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        <p class="body-1">
          {{ $t("projects") }}
        </p>
      </v-tab>

      <v-tab href="#tab-2">
        <p class="body-1">
          {{ $t("websiteDesign") }}
        </p>
      </v-tab>

      <v-tab href="#tab-3">
        <p class="body-1">
          {{ $t("mobileDesign") }}
        </p>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-card flat color="card">
          <v-card-text>
            <v-data-iterator :items="projects" hide-default-footer>
              <template v-slot:default="{ items }">
                <v-row>
                  <v-col v-for="(item, index) in items" :key="index" cols="12" md="3" lg="4" data-aos="flip-left">
                    <v-hover v-slot="{ hover }">
                      <v-card :elevation="hover ? 12 : 2" max-width="600" class="zoom" @click="openDialog(item)">
                        <v-img :aspect-ratio="16 / 9" :src="hover ? item.gif : item.img">
                          <div v-if="hover" class="d-flex gradient-overlay-container v-card--reveal white--text overlay" style="height: 100%">
                            <div class="overlay-content" style="text-align: start">
                              <p class="mb-0">{{ item.title }}</p>
                            </div>
                          </div>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <v-card flat color="card">
          <v-card-text>
            <v-row>
              <v-col cols="12" v-if="loadingWebDesign">
                <v-progress-linear indeterminate color="primary"></v-progress-linear>
              </v-col>
              <v-col cols="12">
                <iframe
                  style="border: 1px solid rgba(0, 0, 0, 0.1)"
                  width="90%"
                  height="500"
                  src="https://embed.figma.com/design/uVxcbVGTG1NwLif634LWne/Web?node-id=0-1&embed-host=share"
                  allowfullscreen
                   @load="loadingWebDesign = false"
                ></iframe>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-3">
        <v-card flat color="card">
          <v-card-text>
            <v-row>
              <v-col cols="12" v-if="loadingMovileDesign">
                <v-progress-linear indeterminate color="primary"></v-progress-linear>
              </v-col>
              <v-col cols="12">
                <iframe
                @load="loadingMovileDesign = false"
                  style="border: 1px solid rgba(0, 0, 0, 0.1)"
                  width="90%"
                  height="500"
                  src="https://embed.figma.com/design/UOcsysv9LapiZgsitCTib5/Movil?node-id=0-1&embed-host=share"
                  allowfullscreen
                ></iframe>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-dialog v-model="dialog" max-width="550">
      <v-card>
        <v-img height="260" :src="modalInfo.gif"></v-img>

        <v-card-title>{{ modalInfo.title }}</v-card-title>

        <v-card-text style="text-align: start">
          <div>{{ modalInfo.description }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>{{ $t("technologiesUsed") }}</v-card-title>

        <v-card-text>
          <v-row class="mt-2">
            <v-col cols="2" v-for="(item, index) in modalInfo.technologies" :key="index">
              <v-icon v-if="item.icon" :color="item.color">{{ item.icon }}</v-icon>
              <v-img v-else :src="item.img" max-height="35" max-width="35"></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="reserve" target="_blanck" :href="modalInfo.src"> {{ $t("try") }} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import "../style/GeneralStyle.css";

export default {
  name: "AboutMe",
  data: () => ({
    tab: null,
    hover: false,
    projects: [],
    dialog: false,

    modalInfo: {
      title: null,
      description: null,
      gif: null,
      src: null,
    },
    loadingWebDesign:true,
    loadingMovileDesign:true,
  }),
  created() {
    this.initText();
  },
  mounted() {},
  methods: {
  
    initText() {
      this.projects = [
        {
          img: require("../assets/img/projects/documents.png"),
          title: this.$t("sectionProjects.documentsTitle"),
          description: this.$t("sectionProjects.documentsDesc"),
          src: "https://school-documents.vercel.app/",
          gif: require("../assets/gif/documents.gif"),
          technologies: [
            { img: null, name: "Vue", icon: "mdi-vuejs", color: "green" },
            { img: null, name: "Vuetify 2", icon: "mdi-vuetify", color: "blue" },
            { img: null, name: "JS", icon: "mdi-language-javascript", color: "yellow" },
            { img: null, name: "CSS", icon: "mdi-language-css3", color: "blue" },
            { img: null, name: "HTML 5", icon: "mdi-language-html5", color: "orange" },
          ],
        },
        {
          img: require("../assets/img/projects/landingPsicologa.png"),
          title: this.$t("sectionProjects.landingPage"),
          description: this.$t("sectionProjects.landingPsiclogDes"),
          src: "https://landig-psychologist.vercel.app/",
          gif: require("../assets/gif/psicologa.gif"),
          technologies: [
            { img: null, name: "Vue", icon: "mdi-vuejs", color: "green" },
            { img: null, name: "Vuetify 2", icon: "mdi-vuetify", color: "blue" },
            { img: null, name: "JS", icon: "mdi-language-javascript", color: "yellow" },
            { img: null, name: "CSS", icon: "mdi-language-css3", color: "blue" },
            { img: null, name: "HTML 5", icon: "mdi-language-html5", color: "orange" },
            { img: require("../assets/img/technologies/image.png"), name: "Vue", icon: null, color: null },
          ],
        },
        {
          img: require("../assets/img/projects/red1.png"),
          title: this.$t("sectionProjects.red1"),
          description: this.$t("sectionProjects.red1Des"),
          src: "https://red-1-one.vercel.app/",
          gif: require("../assets/gif/red1.gif"),
          technologies: [
            { img: null, name: "Vue", icon: "mdi-vuejs", color: "green" },
            { img: null, name: "Vuetify 2", icon: "mdi-vuetify", color: "blue" },
            { img: null, name: "JS", icon: "mdi-language-javascript", color: "yellow" },
            { img: null, name: "CSS", icon: "mdi-language-css3", color: "blue" },
            { img: null, name: "HTML 5", icon: "mdi-language-html5", color: "orange" },
            { img: require("../assets/img/technologies/Paypal.png"), name: "paypal", icon: null, color: null },
          ],
        },
        {
          img: require("../assets/img/projects/tracking.png"),
          title: this.$t("sectionProjects.trackingTitle"),
          description: this.$t("sectionProjects.trackingDesc"),
          src: "https://tracking-omega.vercel.app/",
          gif: require("../assets/gif/tracking.gif"),
          technologies: [
            { img: null, name: "Vue", icon: "mdi-vuejs", color: "green" },
            { img: null, name: "Vuetify 2", icon: "mdi-vuetify", color: "blue" },
            { img: null, name: "JS", icon: "mdi-language-javascript", color: "yellow" },
            { img: null, name: "CSS", icon: "mdi-language-css3", color: "blue" },
            { img: null, name: "HTML 5", icon: "mdi-language-html5", color: "orange" },
            { img: require("../assets/img/technologies/Google_Maps_Logo.png"), name: "google maps", icon: null, color: null },
            { img: require("../assets/img/technologies/driverJs.png"), name: "driver js", icon: null, color: null },
          ],
        },
         {
          img: require("../assets/img/projects/red1Update.png"),
        title: this.$t("sectionProjects.red1"),
          description: this.$t("sectionProjects.red1Des"),
          src: "https://red1-landing.vercel.app/",
          gif: require("../assets/gif/red1Update.gif"),
          technologies: [
            { img: null, name: "Vue 3", icon: "mdi-vuejs", color: "green" },
            { img: null, name: "Vuetify 3", icon: "mdi-vuetify", color: "blue" },
            { img: null, name: "JS", icon: "mdi-language-javascript", color: "yellow" },
            { img: null, name: "CSS", icon: "mdi-language-css3", color: "blue" },
            { img: null, name: "HTML 5", icon: "mdi-language-html5", color: "orange" },
          ],
        },
      ];
    },
    openDialog(item) {
      this.modalInfo.title = item.title;
      this.modalInfo.description = item.description;
      this.modalInfo.gif = item.gif;
      this.modalInfo.src = item.src;
      this.modalInfo.technologies = item.technologies;

      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style>
.zoom {
  transition: transform 0.3s, box-shadow 0.3s;
}

.zoom:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.gradient-overlay-container {
  position: relative;
  color: white;
  overflow: hidden;
}

.gradient-overlay-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%);
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.gradient-overlay-container:hover::before {
  opacity: 1;
}

.overlay-content {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
</style>
