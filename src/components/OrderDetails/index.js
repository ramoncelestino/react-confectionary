import styles from './orderdetails.module.scss';

const OrderDetails = (props) => {
  return (
    <div className={styles.order_details}>
      <h5>{props.details.customer_email}</h5>
      <h5>{props.details.customer_phone}</h5>
    </div>
  );
};

export default OrderDetails;
