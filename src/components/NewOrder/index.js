import OrderForm from '../OrderForm';

const NewOrder = (props) => {
  const saveOrderHandler = (order) => {
    console.log('ENTREI');
    console.log(order);

    props.onNewOrder(order);
  };

  const cancelOrderHandler = (value) => {
    props.onCancel(value);
  };

  return (
    <OrderForm
      onSaveOrder={saveOrderHandler}
      onCancelOrder={cancelOrderHandler}
    />
  );
};

export default NewOrder;
