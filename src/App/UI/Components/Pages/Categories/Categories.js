import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../Button/Button';
import { categories } from '../../../../Constants/data';
import ProductCard from '../../ProductCard/ProductCard';
import female from '../../../../Images/png/female.png'

function Categories() {

    // useEffect(() => {
    //     AOS.init({ duration: 1000 });
    // }, []);

    return (
        <>
            <Navbar />
            <div className='Categories'>
                <div className='first-box'>
                    <div className='box-details'>
                        <div className='boxep'>
                            <div className='box-para'>
                                <p>Grab Up to 50% Off On Selected Headphones</p>
                            </div>
                            <div className='cat-button'>
                                <Button type='button' text={'Buy Now'} class='buy-now' />
                            </div>
                        </div>
                        <div className='picture'>
                            <img src={female} alt='' className='cat-image' />
                        </div>
                    </div>
                </div>
                <div className='products'>
                    <div className='headphones'>
                        <div className='product-title'>
                            <h4>Headphones For You!</h4>
                        </div>
                        <div className='product-card'>
                            <ProductCard productImage='' productName='' price='' properties='' ratings='' type='' text={''} altText='Product Image' />
                            <ProductCard productImage='' productName='' price='' properties='' ratings='' type='' text={''} altText='Product Image' />
                            <ProductCard productImage='' productName='' price='' properties='' ratings='' type='' text={''} altText='Product Image' />
                            <ProductCard productImage='' productName='' price='' properties='' ratings='' type='' text={''} altText='Product Image' />
                            <ProductCard productImage='' productName='' price='' properties='' ratings='' type='' text={''} altText='Product Image' />
                            <ProductCard productImage='' productName='' price='' properties='' ratings='' type='' text={''} altText='Product Image' />
                        </div>
                    </div>
                    <div className='similar'>
                        <div className='similar-title'>
                            <h4>Similar Items You Might Like</h4>
                        </div>
                        <div className='similar-card'></div>
                    </div>
                    <div className='recently'>
                        <div className='recently-title'>
                            <h4>Recently viewed</h4>
                        </div>
                        <div className='recently-card'></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Categories