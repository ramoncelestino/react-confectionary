import Home from './components/Home';
import './styles/global.scss';
import OrderView from './components/OrderView';
import CustomerView from './components/CustomerView';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import styles from './styles/app.module.scss';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.content}>
        <Router>
          <Route path="/" component={Home} exact />
          <Route path="/customers/" component={CustomerView} />

          <Route path="/orders/" component={OrderView} />
        </Router>
      </div>
    </div>
  );
}

export default App;
