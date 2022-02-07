import Login from "./components/Login";
import LoginInfoBar from "./components/LoginInfoBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => 
{
  return (
    <Router>
      <div className="App">
        <img src="twitter_homepage.png" alt="Twitter Homepage Image" />
        <Login/>
        <LoginInfoBar/>
      </div>
      <Switch>
        <Route path="/signup"></Route>
      </Switch>
    </Router>
  );
}

export default App;
