import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../Button/Button';
import { categories } from '../../../../Constants/data';
import ProductCard from '../../ProductCard/ProductCard';

function Categories() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Navbar />
            <div className='Categories'>
                <div className='first-box'>
                    <div className='box-details'>
                        <div className='boxep' data-aos='fade-up'>
                            <div className='box-para'>
                                <p>Grab Up to 50% Offon Selected Headphones</p>
                            </div>
                            <Button type='button' text={'Buy Now'} class='buy-now' />
                        </div>
                    </div>
                </div>
                <div className='products'>
                    <div className='headphones'>
                        <div className='product-title'>
                            <h4>Headphones For You</h4>
                            <div className='product-card'>
                                <ProductCard productImage='' productName='' price='' properties='' ratings='' type='' text={''} altText='Product Image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Categories