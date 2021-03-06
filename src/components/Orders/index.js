import style from './orders.module.scss';
import Order from '../Order';
const Orders = (props) => {
  return (
    <div className={style.orders}>
      <h2>Encomendas</h2>
      {props.orders.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
};

export default Orders;
