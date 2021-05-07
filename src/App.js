import Home from './components/Home';
import './styles/global.scss';
import OrderView from './components/OrderView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import styles from './styles/app.module.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.app}>
        <Router>
          <Route path="/" component={Home} exact />
          <Route path="/orders/" component={OrderView} />
        </Router>
      </div>
    </>
  );
}

export default App;
