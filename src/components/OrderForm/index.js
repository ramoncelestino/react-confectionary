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

  const [isValidName, setValidName] = useState(true);

  const submitOrder = (event) => {
    event.preventDefault();

    if (inputCustomerName.trim().length == 0) {
      setValidName(false);
      return;
    }
    const newOrder = {
      deliveredAt: new Date(inputDeliveredAt),
      customer_name: inputCustomerName,
      customer_email: inputCustomerEmail,
      customer_phone: inputCustomerPhone,
    };

    console.log(newOrder);
    props.onSaveOrder(newOrder);
  };

  const cancelHandler = () => {
    props.onCancelOrder(false);
  };

  return (
    <div className={styles.order_form}>
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>Customer: </label>
              <input
                style={{
                  border: !isValidName ? '2px solid red' : '1px solid #c4c4c4',
                }}
                className="form-control"
                type="text"
                value={inputCustomerName}
                onChange={customerNameChange}
              ></input>
            </div>
            <div className="col-md-6">
              <label>Email: </label>
              <input
                className="form-control"
                type="text"
                value={inputCustomerEmail}
                onChange={customerEmailChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>Phone: </label>
              <input
                className="form-control"
                type="text"
                value={inputCustomerPhone}
                onChange={customerPhoneChange}
              ></input>
            </div>
            <div className="col-md-6">
              <label>Delivered At: </label>
              <input
                className="form-control"
                type="date"
                value={inputDeliveredAt}
                onChange={deliveredChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <button className="btn form-control" onClick={cancelHandler}>
                Cancel
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="btn form-control"
                type="submit"
                onClick={submitOrder}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
