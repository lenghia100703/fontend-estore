import latest_offer from './img/latest-offer.png';
import latest_man from './img/latest-man.png';

export default function LatestOffers() {
    return (
        <div className="latest-wrapper lf-padding">
            <div
                className="latest-area latest-height d-flex align-items-center"
                data-background={`url(${latest_offer})`}
                style={{ backgroundImage: `url(${latest_offer})` }}
            >
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                            <div className="latest-caption">
                                <h2 className='title-color-dark'>
                                    Get Our
                                    <br />
                                    Latest Offers News
                                </h2>
                                <p className='title-color-dark'>Subscribe news latter</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 ">
                            <div className="latest-subscribe">
                                <form action="#">
                                    <input className='input-color-dark' type="email" placeholder="Your email here" />
                                    <button>Shop Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="man-shape">
                    <img src={latest_man} alt="" />
                </div>
            </div>
        </div>
    );
}
