import './App.css';
import RentGraph from './pages/rentGraph.js';
import IncomeGraph from './pages/incomeGraph.js';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" id='navbarTitle' href="#">Toronto Cost of Living</a>
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
            <a className="nav-link" href="#">Home</a>
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
                <button className="dropdown-item" type="button">English</button>
                <button className="dropdown-item" type="button">Spanish</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div className="rent-div">
      <h2>Average Rent in Toronto</h2>
      <p>This graph shows the average price of a one-bedroom apartment in Toronto over the past 6 years.</p>
      <RentGraph />
    </div>

    <div className="income-div">
      <h2>Median Income in Toronto</h2>
      <p>This graph shows the median income of a person working in Toronto over the past 6 years.</p>
      <IncomeGraph />
    </div>
    </>
  );
}

export default App;
