import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { payment } from '../../redux/cartSlice';
import './Modal.css';

function Modal({ onOpen }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePay = () => {
        setTimeout(() => {
            dispatch(payment());
            navigate('/payment');
        }, 500);
    };

    return (
        <div className="dark-bg" onClick={() => onOpen(false)}>
            <div
                className="modal_container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="modal_header">
                    <div className="modal_title">Chọn địa chỉ</div>
                </div>
                <div className="modal_content">
                    <input placeholder="Họ Và Tên" className="content_2" />
                    <div className="choose">
                        <div className="content_1">
                            <select className="select_1">
                                <option value="0">Chọn Tỉnh/Thành</option>
                                <option value="1">Hà Nội</option>
                                <option value="2">Hải Dương</option>
                                <option value="3">Quảng Ninh</option>
                            </select>
                        </div>
                        <div className="content_1">
                            <select className="select_1">
                                <option value="0">Chọn Quận/Huyện</option>
                                <option value="1">Thanh Xuân</option>
                                <option value="2">Thanh Hà</option>
                                <option value="3">Hạ Long</option>
                            </select>
                        </div>
                        <div className="content_1">
                            <select className="select_1">
                                <option value="0">Chọn Phường/Xã</option>

                                <option value="1">Hạ Đình</option>
                                <option value="2">Việt Trì</option>
                                <option value="3">Hải Tiến</option>
                            </select>
                        </div>
                    </div>
                    <input placeholder="Ghi chú thêm" className="content_2" />
                    <button className="btn_1 checkout_btn_1 pay" onClick={handlePay}>
                        Thanh Toán
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
