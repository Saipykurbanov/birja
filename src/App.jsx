import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useMain from './useMain';
import SignIn from './pages/sigIn/SignIn';
import Panel from './components/panel/Panel';


function App() {

  const main = useMain()

  return (
    <>
      {main.auth ? 
        <Router>

            <Panel />

            <div className="main_container">
              <Routes>
                  <Route path='/' element={''}/>
              </Routes>
            </div>

        </Router>
      :<SignIn />}
    </>
  )
}

export default App
