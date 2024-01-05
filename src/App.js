import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import { missionData } from './data/missionsData';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex flex-col h-screen">
    <header className="bg-gray-800 text-white p-4 flex justify-center">All Missions Data</header>
    <main className="flex-grow flex">
      {!loggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <Dashboard missionsData={missionData} />
      )}
    </main>
    <footer className="bg-gray-800 text-white p-4 flex justify-center">Missions End</footer>
  </div>

  );
}

export default App;
