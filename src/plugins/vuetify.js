import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const isDarkMode = localStorage.getItem("isDarkMode") === "true";

export default new Vuetify({
  theme: {
    dark: isDarkMode, // Inicialmente en el estado guardado en localStorage
    themes: {
      light: {
        customBlue: "#E3F2FD",
      },
      dark: {
        card: "#121212",
        customBlue: "#11111E",
      },
    },
  },
});
