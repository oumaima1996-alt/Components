//import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js'
import FullName from './Component/Profile/FullName'
import Adress from './Component/Profile/Adress'
import Footer from './Component/Profile/Footer'

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />
      <Footer />
     
    </div>
  );
}

export default App;
