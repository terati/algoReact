import ComponentEx from './ComponentEx';
import CounterFunct from './CounterFunct';
import FunctionBased from './FunctionBased';
import Navbar from './components/Navbar2/Navbar';
// import Test from './components/Experimenting/Test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    {/* <Test /> */}
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
    </Router>

    {/* <CounterFunct /> */}
    {/* <FunctionBased /> */}
    {/* <ComponentEx /> */}
    </div>
  );
}

export default App;


