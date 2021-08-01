import './App.css';
import SignIn from './components/signin/signIn';
import Header from './components/header/header';
import { useState } from 'react';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter,Redirect,Route} from 'react-router-dom';

function App() {
  const [state,setState]=useState({
    login:false
  });
  return (
    <div className="App">
     
     
    <BrowserRouter>
    <Header />
    {state.login ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
    <Route path='/login' component={SignIn} />
    </BrowserRouter>
    </div>
  );
}

export default App;
