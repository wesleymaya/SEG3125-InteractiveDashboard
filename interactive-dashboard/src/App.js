import './App.css';
import RentGraph from './pages/rentGraph.js';
import IncomeGraph from './pages/incomeGraph.js';
import './i18nTranslations.js';
import { useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" id='navbarTitle' href="#">{t('websiteTitle')}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">{t('home')}</a>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Language
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button" onClick={() => changeLanguage('en')}>{t('english')}</button>
                <button className="dropdown-item" type="button" onClick={() => changeLanguage('es')}>{t('spanish')}</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div className="rent-div">
      <h2>{t('chart1Title')}</h2>
      <p>{t('chart1Desc')}</p>
      <RentGraph />
    </div>

    <div className="income-div">
      <h2>{t('chart2Title')}</h2>
      <p>{t('chart2Desc')}</p>
      <IncomeGraph />
    </div>
    </>
  );
}

export default App;
