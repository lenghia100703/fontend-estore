import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../../../redux/cartSlice';
import './CartProduct.css';

export default function CartProduct({ props }) {
    const [totalPrice, setTotalPrice] = useState(props.price * props.quantity);
    const [quantity, setQuantity] = useState(props.quantity);
    const dispatch = useDispatch();

    const changeQuantity = (type) => {
        console.log(type);
        if (type === 'minus') {
            if (quantity > 1) {
                setTotalPrice(totalPrice - props.price);
                setQuantity(quantity - 1);
            }
        } else {
            if (quantity < 10) {
                setTotalPrice(totalPrice + props.price);
                setQuantity(quantity + 1);
            }
        }
    };

    return (
        <tr key={props.id} className="tr-body">
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src={props.image} alt="" className="cart-item-img" />
                    </div>
                    <div className="media-body">
                        <span>{props.nameProduct}</span>
                    </div>
                </div>
            </td>
            <td className="cart-price">
                <h5>{props.price}đ</h5>
            </td>
            <td style={{ textAlign: 'center' }} className="btn-quantity">
                <div className="count-product-cart">
                    <div
                        onClick={() => {
                            dispatch(decrementQuantity(props.id));
                            changeQuantity('minus');
                        }}
                        className="sub-btn"
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <span className="product_quantity-cart">{quantity}</span>
                    <div
                        onClick={() => {
                            dispatch(incrementQuantity(props.id));
                            changeQuantity('plus');
                        }}
                        className="add-btn"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </td>
            <td className="total-price">
                <h5>{totalPrice}đ</h5>
            </td>
            <td className="btn-delete">
                <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => dispatch(removeItem(props.id))}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </td>
        </tr>
    );
}
