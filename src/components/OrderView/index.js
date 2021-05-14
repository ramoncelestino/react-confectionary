import NewOrder from '../NewOrder';
import Orders from '../Orders';
import styles from './orderview.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const OrderView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:8000/api/orders');
      setOrders(data);
      console.log(orders);
    };

    fetchData();
  }, []);

  const [newOrder, setNewOrder] = useState(false);

  const [orderData, setOrderData] = useState('');

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
    if (searchedName.length == 0) {
      setFilteredData(orderData);
      return;
    }

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
      <Orders orders={orders} />
    </div>
  );
};

export default OrderView;
