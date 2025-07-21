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
        "chart1Desc": "This graph shows the average price of a one-bedroom apartment in Toronto from 2018-2023.",
        "chart2Title": "Average Income in Toronto",
        "chart2Desc": "This graph shows the median income of a person working in Toronto from 2018-2023.",
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
        "chart1Desc": "Este gráfico muestra el precio promedio de un apartamento de una habitación en Toronto entre 2018 y 2023.",
        "chart2Title": "Ingreso medio en Toronto",
        "chart2Desc": "Este gráfico muestra el ingreso medio de una persona que trabajó en Toronto entre 2018 y 2023.",
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