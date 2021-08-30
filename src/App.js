// https://insightglobal.com/about
import ComponentEx from './ComponentEx';
import CounterFunct from './CounterFunct';
import FunctionBased from './FunctionBased';
// import Navbar from './components/Navbar2/Navbar';
// import Test from './components/Experimenting/Test';
import Mid1 from './components/Mid1/Mid1';
import Mid2 from './components/Mid2/Mid2';
import Navbar from './components/RegNavbar/RegNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutSection from './components/AboutSection/AboutSection';
import PhotoFlip from './components/PhotoFlip/PhotoFlip';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      <PhotoFlip />
    {/* <Test /> */}
    {/* <Router>
      <Navbar />
        <Switch>
          <Route path='/Mid1' exact component={Mid1} />
          <Route path='/Mid2' exact component={Mid2} />
        </Switch>
    </Router> */}

    {/* <CounterFunct /> */}
    {/* <FunctionBased /> */}
    {/* <ComponentEx /> */}
      <Footer />
    </div>
  );
}

export default App;


