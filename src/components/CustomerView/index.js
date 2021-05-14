import Customers from '../Customers';
import styles from './customerview.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CustomerView = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:8000/api/customers/');
      console.log(data);
      setCustomers(data);
      console.log(customers);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.customer_view}>
      <div className={styles.search}>
        <input className="form-control" type="text"></input>
        <button className="btn" type="submit">
          <i className="fas fa-search "></i>
        </button>
      </div>
      <Customers customers={customers} />
    </div>
  );
};

export default CustomerView;
