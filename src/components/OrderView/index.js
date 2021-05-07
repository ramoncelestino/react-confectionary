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

  const [newOrder, setNewOrder] = useState(false);

  const [orderData, setOrderData] = useState(data);

  const createNewOrderHandler = () => {
    setNewOrder(newOrder ? false : true);
  };

  const newOrderHandler = (newOrder) => {
    setFilteredData(() => {
      return [newOrder, ...filteredData];
    });
    setOrderData(() => {
      return [newOrder, ...orderData];
    });
  };

  const cancelOrderHandler = () => {
    setNewOrder(false);
  };

  const [searchedName, setSearchedName] = useState();

  const changeNameHandler = (event) => {
    setSearchedName(event.target.value);
  };

  const [filteredData, setFilteredData] = useState(orderData);
  const searchOrderHandler = (event) => {
    setFilteredData(
      orderData.filter((order) => order.customer_name == searchedName)
    );
  };

  return (
    <div className={styles.order_view}>
      <div className={styles.search}>
        <input
          className="form-control"
          type="text"
          onChange={changeNameHandler}
        ></input>
        <button className="btn" type="submit" onClick={searchOrderHandler}>
          <i className="fas fa-search "></i>
        </button>
        <button className="btn" type="submit" onClick={createNewOrderHandler}>
          {newOrder && <i className="fas fa-minus "></i>}
          {!newOrder && <i className="fas fa-plus "></i>}
        </button>
      </div>
      {newOrder && (
        <NewOrder onNewOrder={newOrderHandler} onCancel={cancelOrderHandler} />
      )}
      <Orders orders={filteredData} />
    </div>
  );
};

export default OrderView;
