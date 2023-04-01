import { Link } from 'react-router-dom';
import cart from './img/card.png';
import cart_man from './img/card-man.png';
import cart_shape from './img/card-shape.png';

export default function BestProduct() {
    return (
        <div className="best-product-area lf-padding">
            <div className="product-wrapper bg-height" style={{ backgroundImage: `url(${cart})` }}>
                <div className="container position-relative">
                    <div className="row justify-content-between align-items-end">
                        <div className="product-man position-absolute  d-none d-lg-block">
                            <img src={cart_man} alt="" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 d-none d-lg-block">
                            <div className="vertical-text">
                                <span>Manz</span>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="best-product-caption">
                                <h2 className='title-color-dark'>
                                    Find The Best Product
                                    <br /> from Our Shop
                                </h2>
                                <p className='title-color-dark'>Designers who are interesten creating state ofthe.</p>
                                <Link to="#" className="black-btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape bounce-animate d-none d-md-block">
                <img src={cart_shape} alt="" />
            </div>
        </div>
    );
}
