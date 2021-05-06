import { useState } from 'react';
import styles from './orderform.module.scss';

const OrderForm = (props) => {
  const [inputCustomerName, setInputCustomerName] = useState('');

  const customerNameChange = (event) => {
    setInputCustomerName(event.target.value);
  };

  const [inputCustomerEmail, setInputCustomerEmail] = useState('');

  const customerEmailChange = (event) => {
    setInputCustomerEmail(event.target.value);
  };

  const [inputCustomerPhone, setInputCustomerPhone] = useState('');

  const customerPhoneChange = (event) => {
    setInputCustomerPhone(event.target.value);
  };

  const [inputDeliveredAt, setInputDeliveredAt] = useState('');

  const deliveredChange = (event) => {
    setInputDeliveredAt(event.target.value);
  };

  const submitOrder = (event) => {
    event.preventDefault();

    const newOrder = {
      deliveredAt: new Date(inputDeliveredAt),
      customer_name: inputCustomerName,
      customer_email: inputCustomerEmail,
      customer_phone: inputCustomerPhone,
    };
    props.onSaveOrder(newOrder);
  };
  return (
    <div className={styles.order_form}>
      <form onSubmit={submitOrder}>
        <div className="form-group">
          <label>Customer: </label>
          <input
            className="form-control"
            type="text"
            value={inputCustomerName}
            onChange={customerNameChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            className="form-control"
            type="text"
            value={inputCustomerEmail}
            onChange={customerEmailChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input
            className="form-control"
            type="text"
            value={inputCustomerPhone}
            onChange={customerPhoneChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Delivered At: </label>
          <input
            className="form-control"
            type="date"
            value={inputDeliveredAt}
            onChange={deliveredChange}
          ></input>
        </div>
        <div className="form-group">
          <button className="btn btn-primary form-control" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
