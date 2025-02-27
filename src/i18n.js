import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./locale/en.json";
import es from "./locale/es.json";

Vue.use(VueI18n);


const savedLanguage = localStorage.getItem('language');
let locale= null;
if(!savedLanguage){
// Detectar el idioma del navegador
const browserLanguage = navigator.language || navigator.userLanguage;
locale = browserLanguage.split('-')[0]; // Para usar solo el código del idioma (es, en, etc.)
localStorage.setItem('language', locale);
}else{
  locale = savedLanguage;
}


const i18n = new VueI18n({
  locale: locale, // Idioma predeterminado
  fallbackLocale: "en", // Idioma de respaldo
  messages: { en, es }, // Traducciones
});

export default i18n;
