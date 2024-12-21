import { Link } from 'react-router-dom';
import './App.css'
import GoToProfile from './GoToProfile'

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <GoToProfile />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;