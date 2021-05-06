import CardModule from '../CardModule';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="row">
        <div className="col-md-4">
          <CardModule />
        </div>
        <div className="col-md-4">
          <CardModule />
        </div>
        <div className="col-md-4">
          <CardModule />
        </div>
        <div className="col-md-4">
          <CardModule />
        </div>
        <div className="col-md-4">
          <CardModule />
        </div>
        <div className="col-md-4">
          <CardModule />
        </div>
      </div>
    </div>
  );
};

export default Home;
