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
import FilterPanel from './pages/stock/components/filter_panel/FilterPanel';
import Loading from './components/loading/Loading';
import Notice from './components/notice/Notice';


function App() {

  const main = useMain()

  return (
    <main>

      {main.auth === 1 ?<Loading />
      :
        <>

          <Header auth={main.auth}/>

          {main.auth === 2 ? <SignIn /> 
          :
          <div className="main_wrapper container">

            <Router>
              
              <Panel />
           
              <FilterPanel />
           
              <div className="main_container">
                <Routes>
                  <Route path='/' element={<Dashboard />}/>
                  <Route path='/coin/:id' element={<Detail />}/>  
                  <Route path='/stock' element={<Stock />}/>
                </Routes>
              </div>

            </Router>

          </div>}
          <Footer />

          <Prefences />
          <Notice.Init />

        </>}

        
    </main>
  )
} 

export default App
