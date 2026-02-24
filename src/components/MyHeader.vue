<template>
  <div class="d-flex justify-space-between pa-3 my-header align-center" :style="{ backgroundColor: haveScroll ? (isDark ? '#121212' : 'white') : '' }">
    <v-btn icon class="d-md-none" @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <h3 class="primary--text mb-0">Fernando R. Ruelas</h3>


    <div class="my-nav navBar-list d-none d-md-flex">
      <p v-scroll-to="`${item.id}`" v-for="item in items" :key="item.id" class="font-weight-bold" :class="{ active: activeSection == item.id }">
        {{ item.title }}
      </p>
    </div>
    <div class="d-flex" style="gap: 10px">
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ attrs, on }">
          <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-translate</v-icon></v-btn>
        </template>

        <v-list>
          <v-list-item link @click="changedLanguage('es')">
            <v-list-item-title>Español</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="changedLanguage('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon @click="toggleDarkMode"><v-icon>mdi-theme-light-dark</v-icon></v-btn>
     <v-btn color="primary" @click="downloadCV()"><v-icon>mdi-download</v-icon>{{$t("downloadCV")}}</v-btn>
    </div>

    <v-navigation-drawer hide-overlay style="height: 100vh" v-model="drawer" temporary absolute class="d-md-none" color="card">
      <p v-scroll-to="`${item.id}`" v-for="item in items" :key="item.id" class="font-weight-bold" :class="{ active: activeSection == item.id }">
        {{ item.title }}
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
import i18n from "@/i18n";

export default {
  name: "MyHeader",
  components: {},
  data: () => ({
    drawer: false, 
    activeSection: "#home",
    haveScroll: false,
    isDark: localStorage.getItem("isDarkMode") === "true",
  }),
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.checkScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.checkScroll);
  },
  computed: {
    items() {
      return [
        { title: this.$t("home"), id: "#home" },
        { title: this.$t("projects"), id: "#projects" },
        { title: this.$t("aboutMe"), id: "#aboutMe" },
        { title: this.$t("contactMe"), id: "#contactMe" },
      ];
    },
  },
  watch: {
    isDark(val) {
      this.$vuetify.theme.dark = val;
      localStorage.setItem("isDarkMode", val); // Guardar el estado en localStorage
    },
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
    downloadCV() {
      const link = document.createElement("a");
      link.href = "/files/FernandoRodriguezRuelas_CV.pdf"; // Directly reference it from public folder
      link.download = "FernandoRodriguezRuelas_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    changedLanguage(language) {
      localStorage.setItem("language", language);
      i18n.locale = language;
    },

    handleScroll() {
      const scrollPosition = window.scrollY;

      for (const section of this.items) {
        const element = document.querySelector(section.id);
        if (element) {
          const top = element.offsetTop - 70;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            this.activeSection = section.id;
          }
        }
      }
    },

    checkScroll() {
      // Verificar si el scroll no está en el top
      if (window.scrollY > 0) {
        this.haveScroll = true;
      } else {
        this.haveScroll = false;
      }
    },
  },
};
</script>

<style>
.my-nav {
  display: flex;

  gap: 45px;
}

.my-nav p {
  color: #9e9c9c;
  transition: color 0.5s ease;
}

.active {
  color: blue !important;
}

.my-nav p:hover {
  color: blue !important;
  cursor: pointer;
}

.my-header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
