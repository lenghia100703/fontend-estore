import './ButtonMore.css';

function ButtonMore({ onClick }) {
    return (
        <div className="button_container">
            <div className="button_more" onClick={onClick}>
                Xem thêm các sản phẩm khác
            </div>
        </div>
    );
}

export default ButtonMore;
