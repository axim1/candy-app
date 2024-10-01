import { useState } from 'react';
import Image from 'next/image';

export default function Step5() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailLogin = async () => {
    setErrorMessage(''); // Reset error message before each login attempt
    try {
      const response = await fetch('https://staging-kup-test-12304421-75948bd29ae6.herokuapp.com/api/auth/providers/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Handle login success (e.g., redirect or save token)
      } else {
        console.error('Login failed');
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="step">
      {/* Profile Section */}
      <h2 className="step-title">Sign up to see it</h2>

      {/* Google Button */}
      <div className="auth-buttons">
        <a href="https://staging-kup-test-12304421-75948bd29ae6.herokuapp.com/api/auth/providers/google" className="google-button">
        <Image src='/images/candy37.png' alt='google' width={20} height={20} />

          <span>Google</span>
        </a>
      </div>

      <div className="or-divider">
        <hr className="line" />
        <span>OR</span>
        <hr className="line" />
      </div>

      {/* Email and Password Fields */}
      <div className="input-container">
        <input
          type="email"
          placeholder="E-mail"
          className="input-field"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      {/* Sign Up Button */}
      <button className="signup-button" onClick={handleEmailLogin}>
        Sign up
      </button>

      {/* Terms of Service */}
      <p className="terms-text">
        By signing up, you agree to <a href="#">Terms of Service</a>
      </p>

      {/* Styling */}
      <style jsx>{`
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          border-radius: 10px;
          width: 100%;
          max-width: 400px;
          color: white;
          font-family: 'Arial', sans-serif;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-align: center;
        }
          .auth-buttons{
          width:100%;}

        .google-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          color: black;
          padding: 12px 20px;
          width: 100%;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 1rem;
          
              
                    box-sizing: border-box; /* Ensures padding fits within the button width */

        }

        .or-divider {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .line {
          flex: 1;
          border: none;
          border-top: 1px solid #333;
          margin: 0 10px;
        }

        .input-container {
          width: 100%;
        }


        .input-field {
            width: 100%;
            padding: 18px 10px;
            background-color: black; /* Set background to black */
            border: none;
            border-radius: 15px;
            color: white;
            margin-bottom: 15px;
            font-size: 1rem;
            box-sizing: border-box; /* Ensure padding is included in width */
          }

        .error-message {
          color: #f72b63;
          font-size: 0.9rem;
          margin-top: -10px;
          margin-bottom: 10px;
          text-align: left;
          width: 100%;
        }

        .signup-button {
          background: #f95e74;
          padding: 15px 30px;
          color: white;
          border: none;
          border-radius: 15px;
          font-size: 1.2rem;
          cursor: pointer;
          text-transform: uppercase;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        .signup-button:hover {
          background-color: #d32047;
        }

        .terms-text {
          font-size: 0.9rem;
          color: #888;
          margin-top: 15px;
          text-align: center;
        }

        .terms-text a {
          color: #f72b63;
          text-decoration: none;
        }

        .terms-text a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
