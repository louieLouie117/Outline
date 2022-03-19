import './App.css';
import LandingPage from './views/LandingPage';
import LandingPageStyles from './models/landingPage.css'
import Profile from './views/Profile';
import { Router } from '@reach/router';


function App() {
  <LandingPageStyles></LandingPageStyles>
  


  return (
    <div className="App">
      <Router>
        <LandingPage path="/"></LandingPage>
        <Profile path="luis.cardona"></Profile>
      </Router>
    </div>
  );
}

export default App;
