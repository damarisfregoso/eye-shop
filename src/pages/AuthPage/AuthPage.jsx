import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {

  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  return (
    <main className='AuthPage'>

      { showSignUp ?
          <SignUpForm setUser={setUser} navigate={navigate}/>
          :
          <LoginForm setUser={setUser} />
        }
        <button onClick={() => setShowSignUp(!showSignUp)}>Or click here to {showSignUp ? 'Log In' : 'Sign Up'}</button>
    </main>
  );
}