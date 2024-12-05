import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useMain from './useMain';
import SignIn from './pages/sigIn/SignIn';
import Panel from './components/panel/Panel';
import Header from './components/header/Header';
import Stock from './pages/stock/Stock';
import Footer from './components/footer/Footer';


function App() {

  const main = useMain()

  return (
    <main>

      <Header auth={main.auth}/>

      {main.auth ? 
        <div className="main_wrapper container">
          <Router>
            
            <Panel />

            <div className="main_container">
              <Routes>
                <Route path='/stock' element={<Stock />}/>
              </Routes>
            </div>

          </Router>
        </div>
      :<SignIn />}

      <Footer />

    </main>
  )
} 

export default App
