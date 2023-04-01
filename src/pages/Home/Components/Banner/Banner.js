import banner from './img/banner.jpg';

function Banner() {
    return (
        <div className="latest-wrapper lf-padding">
            <div
                className="latest-area latest-height d-flex align-items-center"
                data-background={`url(${banner})`}
                style={{
                    backgroundImage: `url(${banner})`,
                    marginBottom: 80,
                    height: 469,
                    backgroundPositionX: 'center',
                }}
            ></div>
        </div>
    );
}

export default Banner;
