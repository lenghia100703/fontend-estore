import collection1 from './img/collection1.png';
import collection2 from './img/collection2.png';
import collection3 from './img/collection3.png';
import collection4 from './img/collection4.png';
import collection5 from './img/collection5.png';

import { Link } from 'react-router-dom';
import BestRightCap from '../BestRightCap/BestRightCap';

const BestRights = [
    {
        name: 'T-shirt',
        type: 'Jacket',
        img: collection3,
        active: false,
    },
    {
        name: 'Menz jeans',
        type: 'Jacket',
        img: collection4,
        active: true,
    },
    {
        name: 'Menz Winter',
        type: 'Jacket',
        img: collection5,
        active: false,
    },
];

export default function BestCollection() {
    return (
        <div className="best-collection-area section-padding2">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-end">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="best-left-cap">
                            <h2>Best Collection of This Month</h2>
                            <p>Designers who are interesten crea.</p>
                            <Link to="#" className="btn shop1-btn">
                                Shop Now
                            </Link>
                        </div>
                        <div className="best-left-img mb-30 d-none d-sm-block">
                            <img src={collection1} alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                        <div className="best-mid-img mb-30 ">
                            <img src={collection2} alt="" />
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        {BestRights.map((item, index) => {
                            return (
                                <BestRightCap
                                    key={index}
                                    index={index}
                                    name={item.name}
                                    type={item.type}
                                    img={item.img}
                                    active={item.active}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
