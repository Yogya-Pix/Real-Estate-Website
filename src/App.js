import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Property from './pages/property/Property';
import VrPage from './pages/VrPage/VrPage';
import List from './pages/list/List';
import AboutUs from './pages/AboutUs/AboutUs';
import SignIpPage1 from './pages/SignUpPage1/SignInPage1';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Searchbar from './components/filterBox/Searchbar';
import Map from './components/MapIntegration/Map'
import FilterBtnRightPopUp from './components/FilterBtnRight/FilterBtnRightPopUp';
import MapPage from './components/MapPage/MapPage';
import Register from './pages/register/Register';

// import Maps from './components/MapIntegration/Map';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/explorevr/:id' element={<VrPage />} />
          <Route path='/property' element={<List />} />
          <Route path='/property/:id' element={<Property />} />
          <Route path='/MapPage' element={<MapPage />} />
          <Route path='/searchbar' element={<Property />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/signin' element={<SignIpPage1 />} />
          <Route path='/register' element={<Register />} />
          <Route path='/searchbar/:key' element={<Searchbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;