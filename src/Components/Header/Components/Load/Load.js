// import img
import logo from './logo.png';

export default function Load() {
    return (
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
