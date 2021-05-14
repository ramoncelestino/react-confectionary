import { useState } from 'react';
import DateBox from '../DateBox';
import OrderDetails from '../OrderDetails';
import style from './order.module.scss';

const Order = (props) => {
  const [isDetail, setDetail] = useState(false);

  const seeDetailsHandler = () => {
    setDetail(isDetail ? false : true);
  };
  return (
    <>
      <div className={style.order} onClick={seeDetailsHandler}>
        <DateBox date={props.order.deliveredAt} />
        <h1>{props.order.customer.name}</h1>
      </div>
      {isDetail && <OrderDetails details={props.order} />}
    </>
  );
};

export default Order;
