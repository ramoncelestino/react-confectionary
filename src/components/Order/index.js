import style from './order.module.scss';

const Order = (props) => {
  return (
    <div className={style.order}>
      <h1>{props.order.customer_name}</h1>
    </div>
  );
};

export default Order;
