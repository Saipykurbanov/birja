import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useMain from './useMain';
import SignIn from './pages/sigIn/SignIn';
import Panel from './components/panel/Panel';
import Header from './components/header/Header';


function App() {

  const main = useMain()

  return (
    <>
      {main.auth ? 
        <div className="main_wrapper container">
          <Router>
            
              <Header auth={main.auth}/>
              <Panel />

              <div className="main_container">
                <Routes>
                    <Route path='/' element={''}/>
                </Routes>
 
                {/* footer */}
              </div>

          </Router>
        </div>
      :<>
        <Header auth={main.auth}/>
        <SignIn />
      </>}
    </>
  )
}

export default App
