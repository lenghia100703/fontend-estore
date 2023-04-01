import Slide from './Components/Slide/Slide';
import ShopCategory from './Components/ShopCategory/ShopCategory';
import LatestProducts from './Components/LatestProducts/LatestProducts';
import BestProduct from './Components/BestProduct/BestProduct';
import BestCollection from './Components/BestCollection/BestCollection';
import LatestOffers from './Components/LatestOffers/LatestOffers';
import Endow from './Components/Endow/Endow';
import ListImg from './Components/ListImg/ListImg';

import CallJavaScript from '../../Components/CallJavaScript/CallJavaScript';
import Banner from './Components/Banner/Banner';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    document.title = 'Home';
    return (
        <main>
            <Slide />
            <LatestProducts />
            <BestProduct />
            <BestCollection />
            <LatestOffers />
            <Endow />
            <Banner />
            <ListImg />
        </main>
    );
}
