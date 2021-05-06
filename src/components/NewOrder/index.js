import OrderForm from '../OrderForm';

const NewOrder = (props) => {
  const saveOrderHandler = (order) => {
    props.onNewOrder(order);
    console.log('GET IN');
  };

  return <OrderForm onSaveOrder={saveOrderHandler} />;
};

export default NewOrder;
