import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login";
import "./App.css";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading">⏳ Loading authentication...</div>;
  }

  return (
    <div className="app-container">
      <h1>Welcome to Auth0 Practice App</h1>

      <Login />

      {isAuthenticated && (
        <div className="profile-card">
          <img src={user.picture} alt={user.name} className="profile-pic" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
