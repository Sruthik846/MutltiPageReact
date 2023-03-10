

import About from './Container/About';
import Profile from './Container/Profile'
import {useState} from 'react'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import {AppContext} from './AppContext'

function App() {
  const [state,setState] = useState(20)
  // let component
  // if (state === 'about'){
  //   component = <About />
  // }
  // if (state === 'profile'){
  //   component = <Profile />
  // }
  return (
    <div className="App">
      {/* <button onClick={()=>setState('about')}>About</button>
      <button onClick={()=>setState('profile')}>Profile</button> */}
      <AppContext.Provider value={{data:state}}>
      <Router>
            <Link to='/about'>About</Link>
            <Link to='/profile'>Profile</Link>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile data={state} />} />
          </Routes>
         
      </Router>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
