import React from 'react';
import './Checkout.scss';
export default function Checkout() {
  return (
    <div className='checkout'>
    <div className='rounded'></div>
    <div className='checkout_container'>
            <div class = "movie-info_container">
            <img src="https://cdn.galaxycine.vn/media/2025/3/3/quy-nhap-trang-sneak-500_1740997588972.jpg" alt="" />
            <div className='movie-info'>
                <h3>Movie Name</h3>
                <p>2D Phu De <span>-</span> <span>T18</span></p>
            </div>
            </div>
            <div className='theater-info_container'>
                <div className='theater'><strong>Galaxy</strong> <span>-</span> <span>Rap 3</span></div>
                <div className='timeAndDate'><span>Suat:</span> <strong>12:00</strong> <span>-</span> <span>15/03/2025</span></div>
                
            </div>
            <div className='dashedLine'></div>
            <div className='seat-info_container'>
                <div className='seatInfo'>
                    <strong>1x</strong> <span>Ghe don</span>
                    <div><span>Ghe:</span> <strong>L8</strong></div>
                </div>
                <div className='seatPrice'>85000</div>
                
            </div>
            <div className='dashedLine'></div>
            <div className='offer-info_container'>
                <div className='combo'>
                    <strong>1x</strong> <span>Combo</span>
                </div>
                <div className='comboPrice'>109.000</div>
            </div>
            <div className='dashedLine'></div>
            
            <div className='total_container'>
                <div className='total'><strong>Tong cong:</strong></div>
                <div className='totalPrice'><span>500.000</span></div>
            </div>
            </div>
            <div className='button_container'>
                <button className='item-button'>Quay lại</button>
                <button className='item-button'>Thanh toán</button>
            </div>
        </div>
  )
}
