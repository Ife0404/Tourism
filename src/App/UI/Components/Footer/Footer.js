import React from 'react';
import './Footer.css';
import pageLogo from '../../../Images/png/17201701.png';
import { CgBriefcase } from "react-icons/cg";
import { PiGift } from "react-icons/pi";
import { FiHelpCircle } from "react-icons/fi";
import stripe from '../../../Images/png/stripe.png';
import visa from '../../../Images/png/visa2.png';
import masterCard from '../../../Images/png/master.png';
import amazon from '../../../Images/png/amazon.png';
import klarna from '../../../Images/png/klarna2.png'
import payPal from '../../../Images/png/pay.png';
import applePay from '../../../Images/png/apay.png';
import googlePay from '../../../Images/png/Gpay2.png';
import PaymentCard from '../PaymentCard/PaymentCard';
import { SiKlarna } from "react-icons/si";
{/* <SiKlarna /> */ }

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-content'>

                <hr></hr>

                <div className='footer-links'>
                    <div className='footer-details'>
                        <a><img src={pageLogo} alt='' height="100px" width="100px" /></a>
                        <div className='para'>
                            <p>Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                        </div>
                        <div className='payments'>
                            <h4>Accepted Payments</h4>
                            <div className='icon'>
                                <div className='first-icon'>
                                    <PaymentCard paymentImage={stripe} alt='Payment Card' />
                                    <PaymentCard paymentImage={visa} alt='Payment Card' />
                                    <PaymentCard paymentImage={masterCard} alt='Payment Card' />
                                    <PaymentCard paymentImage={amazon} alt='Payment Card' />
                                </div>
                                <div className='second-icon'>
                                    <PaymentCard paymentImage={klarna} alt='Payment Card' />
                                    <PaymentCard paymentImage={payPal} alt='Payment Card' />
                                    <PaymentCard paymentImage={applePay} alt='Payment Card' />
                                    <PaymentCard paymentImage={googlePay} alt='Payment Card' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='footer-main'>
                        <h4>Department</h4>
                        <a href='/fashion'>
                            <p>Fashion</p>
                        </a>
                        <a href='/education'>
                            <p>Education Product</p>
                        </a>
                        <a href='/frozen'>
                            <p>Frozen Food</p>
                        </a>
                        <a href='/beverages'>
                            <p>Beverages</p>
                        </a>
                        <a href='/organic'>
                            <p>Organic Grocery</p>
                        </a>
                        <a href='/office'>
                            <p>Office Supplies</p>
                        </a>
                        <a href='/beauty'>
                            <p>Beauty Products</p>
                        </a>
                        <a href='/books'>
                            <p>Books</p>
                        </a>
                        <a href='/electronics'>
                            <p>Electronics & Gadget</p>
                        </a>
                        <a href='/travel'>
                            <p>Travel Accesories</p>
                        </a>
                        <a href='/fitness'>
                            <p>Fitness</p>
                        </a>
                        <a href='/sneakers'>
                            <p>Sneakers</p>
                        </a>
                        <a href='/toys'>
                            <p>Toys</p>
                        </a>
                        <a href='/furniture'>
                            <p>Furniture</p>
                        </a>
                    </div>
                    <div className='footer-main'>
                        <h4>About us</h4>
                        <a href='/about'>
                            <p>About shopcart</p>
                        </a>
                        <a href='/careers'>
                            <p>Careers</p>
                        </a>
                        <a href='/news'>
                            <p>News & Blog</p>
                        </a>
                        <a href='/help'>
                            <p>Help</p>
                        </a>
                        <a href='/press'>
                            <p>Press Center</p>
                        </a>
                        <a href='/shop'>
                            <p>Shop by location</p>
                        </a>
                        <a href='/brands'>
                            <p>Shopcart brands</p>
                        </a>
                        <a href='/affiliate'>
                            <p>Affiliate & Partners</p>
                        </a>
                        <a href='/ideas'>
                            <p>Ideas & Guides</p>
                        </a>
                    </div>
                    <div className='footer-main'>
                        <h4>Services</h4>
                        <a href='/gift'>
                            <p>Gift Card</p>
                        </a>
                        <a href='/mobile'>
                            <p>Mobile App</p>
                        </a>
                        <a href='/shipping'>
                            <p>Shipping & Delivery</p>
                        </a>
                        <a href='/order'>
                            <p>Order Pickup</p>
                        </a>
                        <a href='/account'>
                            <p>Account Signup</p>
                        </a>
                    </div>
                    <div className='footer-main'>
                        <h4>Help</h4>
                        <a href='/shopcart'>
                            <p>Shopcart Help</p>
                        </a>
                        <a href='/returns'>
                            <p>Returns</p>
                        </a>
                        <a href='/track'>
                            <p>track orders</p>
                        </a>
                        <a href='/contact-us'>
                            <p>contact us</p>
                        </a>
                        <a href='/feedback'>
                            <p>feedback</p>
                        </a>
                        <a href='/security'>
                            <p>Security & Fraud</p>
                        </a>
                    </div>
                </div>

                <hr></hr>

                <div className='footer-below'>
                    <div className='additional-info'>
                        <p><div className='seller-icon'><CgBriefcase /></div>Become Seller</p>
                        <p><div className='gift-icon'><PiGift /></div>Gift Cards</p>
                        <p><div className='help-icon'><FiHelpCircle /></div>Help Center</p>
                    </div>
                    <div className='terms-policy'>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='footer-copyright'>
                        <p>All rights reserved | {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;