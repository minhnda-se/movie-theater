import React from 'react'
import paymentJson from '../../../../../mock/payments.json';
import { useState, useEffect } from 'react';
import '../PaymentMethod/PayMethod.scss';
export default function PayMethod() {
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    setPayment(paymentJson.data.result);
  }, []);
  return (
    <>
    <div className='payment-method_container'>
      <h3 style={{fontWeight:'bold'}}>Phương thức thanh toán</h3>
      <div className='payment-method'>
        {payment.map((item) => (
          <div key={item.id} className='payment_container'>
            <input type="radio" name="payment" value={item.id} />
            <img src={item.image} alt="" />
            <label>{item.paymentName}</label>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};
