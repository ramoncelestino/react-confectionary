import Home from './components/Home';
import './styles/global.scss';
import OrderView from './components/OrderView';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/orders/" component={OrderView} />
    </Router>
  );
}

export default App;
