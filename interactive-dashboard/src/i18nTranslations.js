import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en:{
        translation: {
        "english": "English",
        "spanish": "Spanish",
        "websiteTitle": "Cost Of Living in Toronto",
        "home": "Home",
        "chart1Title": "Average Rent in Toronto",
        "chart1Desc": "This graph shows the average price of a one-bedroom apartment in Toronto over the past 6 years.",
        "chart2Title": "Average Income in Toronto",
        "chart2Desc": "This graph shows the median income of a person working in Toronto over the past 6 years.",
        'year': "Year",
        "price": "Price",
        "income": "Income",
        }
    },
    es: {
        translation: {
        "english": "Inglés",
        "spanish": "Español",
        "websiteTitle": "Coste De Vida En Toronto",
        "home": "Página Principal",
        "chart1Title": "Alquiler promedio en Toronto",
        "chart1Desc": "Este gráfico muestra el precio medio de un apartamento de una habitación en Toronto durante los últimos 6 años.",
        "chart2Title": "Ingreso medio en Toronto",
        "chart2Desc": "Este gráfico muestra el ingreso medio de una persona que trabajó en Toronto durante los últimos 6 años.",
        "year": "Año",
        "price": "Precio",
        "income": "Ingreso",
        }
    },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;