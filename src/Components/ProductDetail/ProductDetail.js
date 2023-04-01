import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../../pages/Products/ProductData';
import { COLOR_SHIRTS } from '../../pages/Products/ProductData';
import { addToCart } from '../../redux/cartSlice';
import ButtonMore from '../ButtonMore/ButtonMore';
import ProductItem from '../ProductItem/ProductItem';
import './ProductDetail.css';

function ProductDetail() {
    const location = useLocation();
    const productId = location.pathname.replace('/product/', '');
    const product = PRODUCTS.find((product) => product.id === productId);
    const colors = COLOR_SHIRTS;
    const features = product.features;
    const rate = product.ratting.toFixed();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [choseColor, setChoseColor] = useState('white');
    const [visible, setVisible] = useState(false);

    const handleColor = (color) => {
        if (choseColor !== color) {
            setChoseColor(color);
        }
    };

    const handleMore = () => {
        setVisible(!visible);
        console.log(productId.slice(0, 9));
    };

    const handleAdd = () => {
        if (quantity < 10) {
            setQuantity((prev) => prev + 1);
        }
    };
    const handleSub = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const showRatting = () => {
        let result = [];
        for (let i = 1; i <= rate; i++) {
            result.push(<FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />);
        }
        for (let j = 1; j <= 5 - rate; j++) {
            result.push(<FontAwesomeIcon icon={faStar} />);
        }
        return result;
    };

    return (
        <div className="detail_container">
            <div className="detail header">
                <div>Trang chủ / {productId}</div>
            </div>
            <div className="detail_inner">
                <div className="detail_left">
                    <img src={product.image} className="image_product" alt={product.nameProduct} />
                </div>
                <div className="detal_right">
                    <h1 className="name_product">{product.nameProduct}</h1>
                    <div className="detal_ratting">
                        {showRatting()}({product.countOfRatting})
                    </div>
                    <div className="price">{product.price}đ</div>
                    <div className="chose-color">
                        <div className="color-header">Màu sắc</div>
                        <div className="color-list">
                            {colors &&
                                colors.map((color, index) => (
                                    <span
                                        key={index}
                                        style={{ backgroundColor: color }}
                                        className={color === choseColor ? 'color-item choses-color' : 'color-item'}
                                        onClick={() => handleColor(color)}
                                    ></span>
                                ))}
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <div className="quantity">
                            <div onClick={handleSub} className="sub-product-btn">
                                -
                            </div>
                            <span>{quantity}</span>
                            <div onClick={handleAdd} className="add-product-btn">
                                +
                            </div>
                        </div>
                        <div
                            className="action"
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: productId,
                                        nameProduct: product.nameProduct,
                                        price: product.price,
                                        image: product.image,
                                    }),
                                )
                            }
                        >
                            Thêm vào giỏ hàng
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature_header">Đặc điểm nổi bật</div>
                        <div className="feature_content">
                            {features &&
                                features.map((feature, index) => (
                                    <div key={index} className="feature_item">
                                        - {feature}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="button-show-more" style={{ marginTop: 50 }}>
                <ButtonMore onClick={handleMore} />
            </div> */}

            <div className="detail_header">Sản phẩm liên quan</div>

            <div className="shoes_inner">
                {PRODUCTS.filter((product) => product.id.includes(productId.slice(0, productId.length - 2)))
                    .slice(0, 6)
                    .map((item, index) => (
                        <ProductItem data={item} key={index} />
                    ))}
            </div>
        </div>
    );
}

export default ProductDetail;
