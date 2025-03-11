import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Retrieve saved language from localStorage or set default to English
const savedLanguage = localStorage.getItem("language") || "en";

// Translation resources
const resources = {
  en: {
    translation: {
      "Settings": "Settings",
      "Language Preferences": "Language Preferences",
      "Change Password": "Change Password",
      "Profile Management": "Profile Management",
      "Dark Mode": "Dark Mode",
      "Select your preferred language for the application.": "Select your preferred language for the application.",
      "Save Preferences": "Save Preferences"
    }
  },
  es: {
    translation: {
      "Settings": "Configuraciones",
      "Language Preferences": "Preferencias de idioma",
      "Change Password": "Cambiar la contraseña",
      "Profile Management": "Gestión de perfil",
      "Dark Mode": "Modo oscuro",
      "Select your preferred language for the application.": "Seleccione su idioma preferido para la aplicación.",
      "Save Preferences": "Guardar preferencias"
    }
  },
  fr: {
    translation: {
      "Settings": "Paramètres",
      "Language Preferences": "Préférences de langue",
      "Change Password": "Changer le mot de passe",
      "Profile Management": "Gestion du profil",
      "Dark Mode": "Mode sombre",
      "Select your preferred language for the application.": "Sélectionnez votre langue préférée pour l'application.",
      "Save Preferences": "Enregistrer les préférences"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Set language from localStorage
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
