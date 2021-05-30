//import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Profile/ProfilePhoto.js'
import FullName from './Profile/FullName'
import Adress from './Profile/Adress'
import Footer from './Profile/Footer'
import jci from './ressourcr/jci.png'

function App() {
  return (
    <div className="App">
      <ProfilePhoto>
        <div>
          <img src= {jci} alt = "jci"/>
        </div>
      </ProfilePhoto>
      <FullName />
      <Adress />
      
      
      <Footer /> 
     
    </div>
  );
}

export default App;
