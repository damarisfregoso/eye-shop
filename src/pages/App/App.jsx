import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {/* Route components in here */}
        <Route path="/" element={<WelcomePage user={user} setUser={setUser} />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
        <Route path="/category/:cat" element={<CategoryPage />}/>
      </Routes>
    </main>
  );
}
