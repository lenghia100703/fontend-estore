import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';

export default function CartTable() {
    const cart = useSelector((state) => state.cart);
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col" style={{ textAlign: 'center' }}>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {cart?.map((cart, index) => {
                    return <CartProduct key={index} props={cart} />;
                })}
                <tr className="bottom_button"></tr>
                <tr className="subtotal">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <h5>Subtotal</h5>
                    </td>
                    <td>
                        <h5>{getTotal().totalPrice}đ</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
