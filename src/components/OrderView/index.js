import NewOrder from '../NewOrder';
import Orders from '../Orders';
import styles from './orderview.module.scss';
import React, { useState, useEffect } from 'react';
const OrderView = () => {
  const data = [
    {
      delivery_date: new Date(2021, 5, 20),
      customer_name: 'luiz',
      customer_email: 'luiz@gmail.com',
      customer_phone: '9999999',
      produtc_name: 'bolo',
      product_quantity: 2,
      product_value: 80,
    },
    {
      delivery_date: new Date(2021, 4, 20),
      customer_name: 'andre',
      customer_email: 'luiz@gmail.com',
      customer_phone: '9999999',
      produtc_name: 'pipoca',
      product_quantity: 2,
      product_value: 80,
    },
    {
      delivery_date: new Date(2021, 5, 12),
      customer_name: 'joao',
      customer_email: 'joao@gmail.com',
      customer_phone: '9999999',
      produtc_name: 'bolo',
      product_quantity: 2,
      product_value: 80,
    },
  ];

  const [orderData, setOrderData] = useState(data);

  const newOrderHandler = (newOrder) => {
    setOrderData(() => {
      return [newOrder, ...orderData];
    });
  };

  return (
    <div className={styles.order_view}>
      <NewOrder onNewOrder={newOrderHandler} />
      <Orders orders={orderData} />
    </div>
  );
};

export default OrderView;
