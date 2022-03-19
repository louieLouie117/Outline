import './App.css';
import LandingPageStyles from './models/landingPage.css'

import LandingPage from './views/LandingPage';
import Profile from './views/Profile';
import { Router, Link } from '@reach/router';

function App() {
  <LandingPageStyles></LandingPageStyles>
  


  return (
    <div className="App">

      <Router>
        <LandingPage path="/"></LandingPage>
        <Profile path="/luiscardona"></Profile>
      </Router>
      <Link to="/luiscardona">Profile Page</Link>

    </div>
  );
}

export default App;
