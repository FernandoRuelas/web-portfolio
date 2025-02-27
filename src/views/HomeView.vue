<template>
  <v-app>
    <div class="home">
      <my-header></my-header>
      <home-section></home-section>
      <projects-section></projects-section>
      <AboutMeSection></AboutMeSection>
      <footer-section></footer-section>

      <btn-scroll></btn-scroll>
    </div>
  </v-app>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import BtnScroll from "@/components/BtnScroll.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "HomeView",
  components: {
    MyHeader,
    HomeSection,
    AboutMeSection,
    ProjectsSection,
    BtnScroll,
    FooterSection,
  },
  mounted() {
    if (!localStorage.getItem("isDarkMode")) {
      localStorage.setItem("isDarkMode", true);
    }
    document.addEventListener("visibilitychange", this.handleTabChange);
  },
  beforeDestroy() {
    document.removeEventListener("visibilitychange", this.handleTabChange);
  },
  computed: {},

  methods: {
    handleTabChange() {
      if (document.hidden) {
        document.title = `😢 ${this.$t("stillHere")}`;
      } else {
        document.title = `${this.$t("miPortfolio")}`; // Change this to your actual page title
      }
    },
  },
};
</script>
