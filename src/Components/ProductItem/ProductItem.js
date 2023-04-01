import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import './ProductItem.css';

function ProductItem({ data, type }) {
    const navigate = useNavigate();
    return (
        <div className="product_container">
            <Link
                to={data.to}
                className="content_up"
                onClick={() => {
                    navigate({ state: data });
                }}
            >
                <img className="img_1" src={data.image} alt="" />
                <img className="img_2" src={data.imageHover} alt="" />
                <div className="buy_btn">
                    <div style={{ color: 'black' }} className="buy_btn_inner">
                        Mua ngay
                    </div>
                </div>
                <div className="ratting" style={{ fontSize: 14, color: 'black' }}>
                    {data.ratting}
                    <span>
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span style={{ color: 'blue', fontWeight: 600, fontSize: 14 }}>({data.countOfRatting})</span>
                </div>
            </Link>
            <div className="content_down">
                <Link className="name_product" to={data.to}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{data.nameProduct}</div>
                </Link>
                <div className="price">{data.price}đ</div>
            </div>
        </div>
    );
}

export default ProductItem;
