// src/Login.jsx
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

function Login() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log("User data:", user);
  return (
    <div className="login-container">
      {!isAuthenticated ? (
        <button className="login-btn" onClick={() => loginWithRedirect()}>
          🔐 Login
        </button>
      ) : (
        <button
          className="logout-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          🚪 Logout
        </button>
      )}
    </div>
  );
}

export default Login;
