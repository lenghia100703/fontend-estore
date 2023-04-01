import "./Fillter.css";

function Fillter({ handleChoicePrice, handleChoiceVote, handleClear }) {
    return (
        <form className="shoes_fillter" id='form-reset'>
            <ul>
                <li>
                    <h4>
                        <i className="fas fa-filter"></i> Giá sản phẩm
                    </h4>
                </li>
                <li>
                    <input id="price-1" type="radio" name='price' onClick={
                        () => handleChoicePrice(100000)
                    } />
                    <label htmlFor="price-1" >0 - 100.000 VNĐ</label>
                </li>
                <li>
                    <input id="price-2" type="radio" name='price' onClick={
                        () => handleChoicePrice(250000)
                    } />
                    <label htmlFor="price-2" >100.000 - 250.000 VNĐ</label>
                </li>
                <li>
                    <input id="price-3" type="radio" name='price' onClick={
                        () => handleChoicePrice(500000)
                    } />
                    <label htmlFor="price-3" >250.000 - 500.000 VNĐ</label>
                </li>
                <li>
                    <input id='price-4' type="radio" name='price' onClick={
                        () => handleChoicePrice(100000000)
                    } />
                    <label htmlFor="price-4" >Trên 500.000 VNĐ</label>
                </li>
                
                <li>
                    <h4>
                        <i className="fas fa-filter"></i> Đánh Giá Sản Phẩm
                    </h4>
                </li>
                <li>
                    <input id="vote-1" type="radio" name='vote' onClick={
                        () => handleChoiceVote(1)
                    } />
                    <label htmlFor="vote-1" >⭐</label>
                </li>
                <li>
                    <input id="vote-2" type="radio" name='vote' onClick={
                        () => handleChoiceVote(2)
                    } />
                    <label htmlFor="vote-2" >⭐⭐</label>
                </li>
                <li>
                    <input id="vote-3" type="radio" name='vote' onClick={
                        () => handleChoiceVote(3)
                    } />
                    <label htmlFor="vote-3" >⭐⭐⭐</label>
                </li>
                <li>
                    <input id='vote-4' type="radio" name='vote' onClick={
                        () => handleChoiceVote(4)
                    } />
                    <label htmlFor="vote-4" >⭐⭐⭐⭐</label>
                </li>
                <li>
                    <input id='vote-5' type="radio" name='vote' onClick={
                        () => handleChoiceVote(5)
                    } />
                    <label htmlFor="vote-5" >⭐⭐⭐⭐⭐</label>
                </li>
                <li>
                    {/* button clear */}
                    <button onClick={handleClear} className="btn btn-primary btn-clear">Clear</button>
                </li>
            </ul>
        </form>
    );
}

export default Fillter;