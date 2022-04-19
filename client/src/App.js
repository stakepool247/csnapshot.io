import NavBar from "./components/navbar/NavBar";
import MainPage from "./page/mainpage/MainPage";
import Footer from "./components/footer/Footer";
import Mainnet from "./page/mainnet/Mainnet";
import Testnet from "./page/testnet/Testnet";
import NotFound from "./page/notfound/NotFound";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <NavBar />
       <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/mainnet" element={<Mainnet />} />
          <Route path="/testnet" element={<Testnet />} /> 
          <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
