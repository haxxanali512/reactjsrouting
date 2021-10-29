import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
     
      
      <Switch>
      <Route path = "/about" exact component={About}/>
      <Route path = "/" exact component={Home}/>
      </Switch>
    
      
    </Router>
     
      </>
  );
}

export default App;
