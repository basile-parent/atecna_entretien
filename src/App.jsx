import './App.css'
import {Link, Outlet} from "react-router-dom"

const App = () => {

  // TODO Fetch

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Utilisateurs</Link></li>
          <li><Link to="/parameters">Paramètres</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App
