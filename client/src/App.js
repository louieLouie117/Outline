import './App.css';
import LandingPageStyles from './models/landingPage.css'
import OnlineEstimateStyles from './models/OnlineEstimateStyles.css'
import LandingPage from './views/LandingPage';
import Profile from './views/Profile';
import { Router } from '@reach/router';

function App() {
  <LandingPageStyles></LandingPageStyles>

  


  return (
    <div className="App">

      <Router>
        <LandingPage path="/"/>
        <Profile path="/luiscardona"/>
      </Router>

    </div>
  );
}

export default App;
