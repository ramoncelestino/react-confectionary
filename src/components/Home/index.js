import CardModule from '../CardModule';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <CardModule
            name="Clientes"
            icon="fas fa-users fa-3x"
            link="/clientes"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <CardModule
            name="Financeiro"
            icon="fas fa-dollar-sign fa-3x"
            link="/clientes"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <CardModule
            name="Produtos"
            icon="fas fa-birthday-cake fa-3x"
            link="/clientes"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <CardModule
            name="Encomendas"
            icon="fas fa-trash fa-3x"
            link="/orders/"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <CardModule icon="fas fa-trash fa-3x" link="/clientes" />
        </div>
        <div className="col-sm-6 col-md-4">
          <CardModule icon="fas fa-trash fa-3x" link="/clientes" />
        </div>
      </div>
    </div>
  );
};

export default Home;
