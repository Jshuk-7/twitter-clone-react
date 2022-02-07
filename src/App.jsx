import Login from "./components/Login";
import LoginInfoBar from "./components/LoginInfoBar";

const App = () => 
{
  return (
    <div className="App">
      <img src="twitter_homepage.png" alt="Twitter Homepage Image" />
      <Login/>
      <LoginInfoBar/>
    </div>
  );
}

export default App;
