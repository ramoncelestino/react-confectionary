import style from './orders.module.scss';
import Order from '../Order';
const Orders = (props) => {
  return (
    <div className={style.orders}>
      {props.orders.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
};

export default Orders;
