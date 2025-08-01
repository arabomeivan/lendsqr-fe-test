import union from '../images/Union.png';
import lendsqr from '../images/lendsqr.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // 🌀 New loading state
  const navigate = useNavigate();
  const jwtToken = process.env.JWT_SECRET;

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in both email and password');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://bookstoreapi-q86w.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/users');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      }
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      {/* LEFT SECTION */}
      <div className="col-sm-6" id="leftsection">
        <div className="row" id="logo">
          <div className="col-sm-12">
            <img src={union} alt="not loading" className="img-fluid" id="union" />
            <img src={lendsqr} alt="not loading" className="img-fluid" id="lendsqr" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12" id="heroosection"></div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="col-sm-6" id="rightsection">
        <div className="row" id="welcometext">
          <div className="col-sm-12">Welcome!</div>
        </div>
        <div className="row" id="logindetailstext">
          <div className="col-sm-12">Enter details to login.</div>
        </div>

        <form id="logincredentials" onSubmit={(e) => e.preventDefault()}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="row" id="forgotpasswordcontainer">
            <div className="col-sm-12">
              <a href="#" id="forgotpasswordlink">FORGOT PASSWORD?</a>
            </div>
          </div>

          <button
            className="btn btn-primary"
            type="button"
            id="loginbtn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}