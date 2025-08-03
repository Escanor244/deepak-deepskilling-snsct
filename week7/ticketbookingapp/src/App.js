import React, { useState } from 'react';

// Components
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Please log in to book your flight.</p>
      <p>✈️ Available Flights: Mumbai → Delhi, Chennai → Bangalore</p>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <p>You can now book your tickets.</p>
      <button>Book Ticket</button>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <h1>✈️ Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
