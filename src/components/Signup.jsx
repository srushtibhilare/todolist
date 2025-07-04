import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account created! You can now login.');
    navigate('/');
  };

  // Added features without changing original functionality
  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com';
  };

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={handleSignup}>
        <h2 className="form-header">Sign Up</h2>
        <input
          type="text"
          placeholder="Create username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Sign Up</button>
        
        <div className="social-login">
          <p>or sign up with</p>
          <button type="button" className="google-login" onClick={handleGoogleSignIn}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google logo" 
              className="google-logo"
            />
            Google
          </button>
        </div>
        
        <div className="signup-link">
          Already have an account? <a href="/">Login</a>
        </div>
      </form>
    </div>
  );
}