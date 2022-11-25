import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './componets/Login';
import Inicio from './componets/Inicio';
import Navbar from './componets/Navbar';
import React from 'react';
import { auth } from './firebase';
import './componets/App.css';
import Admin from './componets/Admin';


function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false)
  React.useEffect(()=>{
    auth.onAuthStateChanged(user =>{
     console.log(user);
      if (user) {
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  },[])


  return firebaseUser !== false ? (
    <Router>
          <Navbar firebaseUser={firebaseUser}/>
        <Routes>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='login' element={<Login />} />
          <Route path='servicio' element={<Admin />} />
        </Routes>
    </Router>
  ) :
    (
      <h1 className='text-center'>Loading...</h1>
    );
}

export default App;
