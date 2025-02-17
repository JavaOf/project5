import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Game_store from './Pages/Game_store';
import Shop_of_goods from './Pages/Shop_of_goods';
import Contacts from './Pages/Contacts';
import Scandinavia from './Worlds/Scandinavia';
import Sparta from './Worlds/Sparta';
import Egypt from './Worlds/Egypt';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext'; 

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game_store' element={<Game_store />} />
          <Route path='/shop_of_goods' element={<Shop_of_goods />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/scandinavia' element={<Scandinavia />} />
          <Route path='/sparta' element={<Sparta />} />
          <Route path='/egypt' element={<Egypt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;


