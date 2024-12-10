import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useMain from './useMain';
import SignIn from './pages/sigIn/SignIn';
import Panel from './components/panel/Panel';
import Header from './components/header/Header';
import Stock from './pages/stock/Stock';
import Footer from './components/footer/Footer';
import Detail from './pages/detail/Detail';
import Dashboard from './pages/dashboard/Dashboard';
import Prefences from './components/prefences/Prefences';


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
                <Route path='/detail/:id' element={<Detail />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
              </Routes>
            </div>

          </Router>

        </div>
      :<SignIn />}

      <Footer />

      <Prefences />

    </main>
  )
} 

export default App
