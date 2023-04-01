import { Link } from 'react-router-dom';
import CartTable from './components/CartTable/CartTable';
import './Cart.css';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Cart() {
    document.title = 'Cart';
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const cart = useSelector((state) => state.cart);
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'blue', paddingTop: 50 }}>Cart List</h1>
            </div>

            <section className="cart_area section_padding" style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <CartTable />

                            <div className="checkout_btn_inner float-right pos-link">
                                <Link className="btn_1" to="/">
                                    Continue Shopping
                                </Link>

                                <div
                                    className="btn_1 checkout_btn_1"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setOpenModal(true)}
                                >
                                    Proceed to checkout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openModal && cart.length > 0 && <Modal onOpen={setOpenModal} />}
        </>
    );
}
