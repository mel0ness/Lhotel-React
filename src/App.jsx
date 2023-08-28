import "./Style/Utils/global.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Chambres from './Pages/Chambres';
import Reservation from './Pages/Reservation';
import Mentions from "./Pages/Mentions";
import Confirm from "./Pages/Confirm";

function App() {


  return (
    <Router>
    <Header />
  <Routes>
    <Route path='/' exact element={<Home />} />
    <Route path='/Chambres'element={<Chambres />} />
    <Route path='/Reservation' element={<Reservation />} />
    <Route path='/Mentions' element={<Mentions />} />
    <Route path='/Confirmation' element={<Confirm />} />
    <Route path='*' element={<Error />} />

  </Routes>
  <Footer />
  </Router>
  )
}

export default App
