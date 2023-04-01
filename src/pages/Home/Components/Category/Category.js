import { Link } from 'react-router-dom';

export default function Category(props) {
    return (
        <div className="col-xl-4 col-lg-6">
            <div className="single-category mb-30">
                <div className="category-img">
                    <img src={props.img} alt="" />
                    <div className="category-caption">
                        <h2>{props.type}</h2>
                        <span className="best">
                            <Link to={props.Link}>{props.nameLink}</Link>
                        </span>
                        <span className="collection">New Collection</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
