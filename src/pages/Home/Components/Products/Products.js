import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Products({ props }) {
    let rate;
    if (props.ratting) {
        rate = props.ratting.toFixed();
    }
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
        <div className="col-xl-4 col-lg-4 col-md-6" key={props.index}>
            <div className="single-product mb-60">
                <div className="product-img">
                    <img src={props.image} alt="" />
                    <div className="new-product">
                        <span>New</span>
                    </div>
                </div>
                <div className="product-caption">
                    <div className="product-ratting">{showRatting()}</div>
                    <h4 className="best-product-color">
                        <Link className="link-to" to={props.to}>
                            {props.nameProduct}
                        </Link>
                    </h4>
                    <div className="price">
                        <ul>
                            <li>{props.price}đ</li>
                            <li className="discount">{props.priceOld}đ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
