import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home';
import Particles from './components/Particles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
{/* <Home/>

<Particles /> */}
    <Router>
     
    
      <Switch>
        
      <Route path = "/about" exact component={About}/>
      
      <Route path = "/" exact render={props =><div><Home /><Particles /> </div>} />
      
      </Switch>
    
      
    </Router>
     
      </>
  );
}

export default App;
