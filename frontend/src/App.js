import { useSelector } from 'react-redux';
import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';


function App() {
  const user = useSelector((state) => state.authReducer.authData)
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={user? <Navigate to="/home" /> : <Navigate to="auth" />} />

          <Route path='/home' element={user? <Home/>: <Navigate to="../auth" />} />

          <Route path='/auth' element={user? <Navigate to="../home" />: <Auth/> } />

        </Routes>
    </div>
  );
}
export default App;
