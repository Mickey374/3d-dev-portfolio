import i18n  from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend: {
        //Translation file path
        loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    //remember to disable before production
    debug: true,
    // include other sections of the 
    // website and load them on demand
    ns: ["common", "home", "navbar", 'hero'],

    interpolation: {
        espaceValue: false,
        formatSeparator: ",",
    },
    react: {
        wait: true,
    }
})

export default i18n;
