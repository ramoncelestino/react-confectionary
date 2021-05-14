import { useState } from 'react';
import style from './customer.module.scss';

const Customer = (props) => {
  const [isDetail, setDetail] = useState(false);

  const seeDetailsHandler = () => {
    setDetail(isDetail ? false : true);
  };
  return (
    <>
      <div className={style.customer} onClick={seeDetailsHandler}>
        <h1>{props.customer.name}</h1>
      </div>
    </>
  );
};

export default Customer;
