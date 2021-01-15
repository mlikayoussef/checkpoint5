import logo from './logo.svg';
import './App.css';
import Profile from "./profile/profile";
import imgImport from "./original.jpeg";

const handleClick = e => {
  e.preventDefault();
  alert("youssef Mlika");
};

function App() {
  return (
    <div className="App">
      <Profile handleClick={handleClick} img={imgImport} fullName="youssef Mlika" bio="loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremv" profession="eleve" >
    {imgImport}
    </Profile>
    </div>

  )

}




export default App;
