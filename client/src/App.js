import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} exact />
          <Route path='/login' exact element={<Auth authRoute='login' />} />
          <Route
            path='/register'
            exact
            element={<Auth authRoute='register' />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
