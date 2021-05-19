import CardModule from '../CardModule';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.row}>
        <div className={styles.column}>
          <CardModule
            name="Clientes"
            icon="fas fa-users fa-3x"
            link="/customers/"
          />
        </div>
        <div className={styles.column}>
          <CardModule
            name="Financeiro"
            icon="fas fa-dollar-sign fa-3x"
            link="/clientes"
          />
        </div>
        <div className={styles.column}>
          <CardModule
            name="Produtos"
            icon="fas fa-birthday-cake fa-3x"
            link="/clientes/"
          />
        </div>
        <div className={styles.column}>
          <CardModule
            name="Encomendas"
            icon="fas fa-shopping-cart fa-3x"
            link="/orders/"
          />
        </div>
        <div className={styles.column}>
          <CardModule
            name="Estoque"
            icon="fas fa-clipboard fa-3x"
            link="/clientes"
          />
        </div>
        <div className={styles.column}>
          <CardModule
            name="Outros"
            icon="fas fa-trash fa-3x"
            link="/clientes"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
