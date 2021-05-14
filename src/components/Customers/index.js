import style from './customers.module.scss';
import Customer from '../Customer';
const Customers = (props) => {
  return (
    <div className={style.customers}>
      {props.customers.map((customer) => (
        <Customer customer={customer} />
      ))}
    </div>
  );
};

export default Customers;
