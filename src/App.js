import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/:type?n">
      <HomePage />
      </Route>
    </Router>
  );
}

export default App;
