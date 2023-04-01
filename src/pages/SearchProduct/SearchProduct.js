import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../Components/ProductItem/ProductItem';
import Fillter from '../../Components/Fillter/Fillter';
import { PRODUCTS } from '../Products/ProductData';
import './SearchProduct.css';
import { useEffect } from 'react';

function SearchProduct() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const [visible, setVisible] = useState(38);
    document.title = 'Search Product';
    const { searchValue } = useParams();
    
    const [priceFilter, setPriceFilter] = useState(0);
    const [vodeFilter, setVoteFilter] = useState(0);

    const handleChoicePrice = (price) => {
        setPriceFilter(price);
        console.log(priceFilter);
    };

    const handleChoiceVote = (vote) => {
        setVoteFilter(vote);
        console.log(vodeFilter);
    };

    const handleClear = (e) => {
        e.preventDefault();
        setPriceFilter(0);
        setVoteFilter(0);
        document.getElementById('form-reset').reset();
    }

    return (
        <div className="shoes_container">
            <div className="shoes_header">
                <h3 style={{ color: 'blue', paddingTop: 50 }}>Keyword: {searchValue}</h3>
            </div>
            <div className="shoes_content">
                <Fillter handleChoicePrice={handleChoicePrice} handleChoiceVote={handleChoiceVote} handleClear={handleClear} />
                <div className="shoes_inner">
                    {PRODUCTS.filter((item) => {
                        if (searchValue === '') {
                            return item;
                        } else if (item.nameProduct.toLowerCase().includes(searchValue.toLowerCase())) {
                            return item;
                        }
                    })
                        .filter((item) => {
                            if (priceFilter === 0) {
                                return item;
                            } else {
                                if (priceFilter === 100000) {
                                    if (item.price <= priceFilter) {
                                        return item;
                                    }
                                }else if (priceFilter === 250000) {
                                    if (item.price <= priceFilter && item.price >= 100000) {
                                        return item;
                                    }
                                } else if (priceFilter === 500000) {
                                    if (item.price <= priceFilter && item.price >= 250000) {
                                        return item;
                                    }
                                } else if (priceFilter === 100000000) {
                                    if (item.price >= 500000) {
                                        return item;
                                    }
                                }
                            }
                        })
                        .filter((item) => {
                            if (vodeFilter === 0) {
                                return item;
                            } else if (Math.round(item.ratting) === vodeFilter) {
                                return item;
                            }
                        })
                        .slice(0, visible)
                        .map((item, index) => (
                            <ProductItem data={item} key={index} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default SearchProduct;
