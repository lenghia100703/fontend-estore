import about_us from './img/about_us.jpg';
import feature_icon_1 from './img/feature_icon_1.svg';
import feature_icon_2 from './img/feature_icon_2.svg';
import feature_icon_3 from './img/feature_icon_3.svg';
import feature_icon_4 from './img/feature_icon_4.svg';
import client from './img/client.png';
import client1 from './img/client_1.png';
import client2 from './img/client_2.png';

import { useEffect } from 'react';

function About() {
    document.title = 'About';
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
            <div class="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'blue', paddingTop: 50 }}>About</h1>
            </div>

            <section class="about_us padding_top" style={{ paddingTop: 50 }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="about_us_content">
                                <h5>Shop sinh ra làm gì ?</h5>
                                <h3>
                                    Shop sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM
                                    bằng cách vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá
                                    trị thiết thực và lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng,
                                    xã hội và cho cổ đông
                                </h3>
                                <div class="about_us_video" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={about_us} alt="#" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feature_part section_padding">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6">
                            <div class="feature_part_tittle">
                                <h3>Câu chuyện dịch vụ khách hàng của Shop</h3>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="feature_part_content">
                                <p>
                                    Ở Shop, chúng tôi tin rằng việc bán một gói hàng đó là bán cả một trải nghiệm mua
                                    sắm. Coolmate có kỳ vọng trở thành một thương hiệu điển hình về việc hướng tới khách
                                    hàng một cách sâu sắc tại Việt Nam. Với mong muốn góp một phần nhỏ thay đổi nhận
                                    thức của các doanh nghiệp trong việc mang tới những trải nghiêm tốt hơn cho khách
                                    hàng, đặc biệt trong lĩnh vực Thương Mại Điện Tử.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_1} alt="#" />
                                <h4>Hỗ trợ thẻ tín dụng</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_2} alt="#" />
                                <h4>Đặt hàng trực tuyến</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_3} alt="#" />
                                <h4>Giao hàng miễn phí</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_4} alt="#" />
                                <h4>Sản phẩm có quà tặng</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="client_review">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="client_review_slider owl-carousel">
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src={client} alt="#" />
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid agencies, we have supported
                                        programmes to help alleviate human suffering.
                                    </p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src={client1} alt="#" />
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid agencies, we have supported
                                        programmes to help alleviate human suffering.
                                    </p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div class="single_client_review">
                                    <div class="client_img">
                                        <img src={client2} alt="#" />
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid agencies, we have supported
                                        programmes to help alleviate human suffering.
                                    </p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="subscribe_part section_padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="subscribe_part_content">
                                <h2>Get promotions & updates!</h2>
                                <p>
                                    Seamlessly empower fully researched growth strategies and interoperable internal or
                                    “organic” sources credibly innovate granular internal .
                                </p>
                                <div class="subscribe_form">
                                    <input type="email" placeholder="Enter your mail" />
                                    <a href="#" class="btn_1">
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
