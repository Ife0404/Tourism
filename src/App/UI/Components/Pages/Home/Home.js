import React, { useEffect } from 'react';
import './Home.css';
import Navbar from '../../Navbar/Navbar';
import Button from "../../Button/Button";
import Footer from '../../Footer/Footer';
import ImageCard from '../../ImageCard/ImageCard';
import green from '../../../../Images/png/chair.png';
import handbag from '../../../../Images/png/handbag.png';
import books from '../../../../Images/png/book.png';
import tech from '../../../../Images/png/gadget.png';
import shoe from '../../../../Images/png/shoe.png';
import travel from '../../../../Images/png/travel2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiTarget } from "react-icons/si";
import BrandCard from '../../BrandCard/BrandCard';
import sprouts from '../../../../Images/png/sprout.png';
import whole from '../../../../Images/png/whole.png';
import outlet from '../../../../Images/png/outlet.png';
import mollie from '../../../../Images/png/mollie.png';
import sports from '../../../../Images/png/sports.png';
import container from '../../../../Images/png/store.png';
import bevmo from '../../../../Images/png/bevmo.png';
import targets from '../../../../Images/png/target.png';
import DiscountCard from '../../DiscountCard/DiscountCard';
import sofa from '../../../../Images/png/sofa.png';
import items from '../../../../Images/png/note.png';
import clothes from '../../../../Images/png/wear.png';
import backpack from '../../../../Images/png/backpack.png';
import ShopCard from '../../ShopCard/ShopCard';
import family from '../../../../Images/png/family.png';
import phone from '../../../../Images/png/phone.png';
import guy from '../../../../Images/png/guy.png';
import gift from '../../../../Images/png/giftcard.png';

{/* <SiTarget /> */ }
// import { RiArrowDropDownLine } from "react-icons/ri";
{/* <RiArrowDropDownLine /> */ }

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='Main>'>
      <Navbar />
      <div className='Home'>
        <div className='home-content'>
          <div className='home-details'>
            <div className='homep' data-aos='fade-up'>
              <div className='home-paragraph'>
                <p>Shopping And Department Store.</p>
              </div>
              <div className='home-description'>
                <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
              </div>
              <Button type='button' text={'Learn More'} class='learn-more' />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>
            <h4>Shop Our Top Categories</h4>
          </div>
          <div className='home-card'>
            <ImageCard yourImage={green} altText='Your Image' labelText='Furniture' />
            <ImageCard yourImage={handbag} altText='Your Image' labelText='Hand Bag' />
            <ImageCard yourImage={books} altText='Your Image' labelText='Books' />
            <ImageCard yourImage={tech} altText='Your Image' labelText='Tech' />
            <ImageCard yourImage={shoe} altText='Your Image' labelText='Sneakers' />
            <ImageCard yourImage={travel} altText='Your Image' labelText='Travel' />
          </div>
        </div>
        <div className='home-brand'>
          <div className='brand-title'>
            <h4>Choose by Brand</h4>
          </div>
          <div className='brand-cards'>
            <div className='card-one'>
              <BrandCard brandImage={sprouts} altText="Brand Image" title="Sprouts" desc="Delivery within 24 hours" />
              <BrandCard brandImage={whole} altText="Brand Image" title="Whole Foods" desc="Delivery within 24 hours" />
              <BrandCard brandImage={outlet} altText="Brand Image" title="Grocery Outlet" desc="Delivery within 24 hours" />
              <BrandCard brandImage={mollie} altText="Brand Image" title="Mollie stones" desc="Delivery within 24 hours" />
            </div>
            <div className='card-two'>
              <BrandCard brandImage={sports} altText="Brand Image" title="Sports Basement" desc="Delivery within 24 hours" />
              <BrandCard brandImage={container} altText="Brand Image" title="Container Store" desc="Delivery within 24 hours" />
              <BrandCard brandImage={targets} altText="Brand Image" title="Target" desc="Delivery within 24 hours" />
              <BrandCard brandImage={bevmo} altText="Brand Image" title="Bevmo!" desc="Delivery within 24 hours" />
            </div>
          </div>
        </div>
        <div className='home-discount'>
          <div className='discount-title'>
            <h4>Get Up To 70% Off</h4>
          </div>
          <div className='discount-cards'>
            <DiscountCard discountImage={sofa} save='Save' number='100' story='Explore Our Furniture & Home Furnishing Range' altText='Discount Image' fontColorClass='font-yellow' dollarColor='rgba(247, 171, 6, 0.801)' backgroundColorClass='background-yellow' />
            <DiscountCard discountImage={items} save='Save' number='29' story='Enjoy Discounts on all types of Books & Gadgets Items' altText='Discount Image' fontColorClass='font-red' dollarColor='crimson' backgroundColorClass='background-red' />
            <DiscountCard discountImage={clothes} save='Save' number='67' story='Explore all types of Dresses for Men' altText='Discount Image' fontColorClass='font-cream' dollarColor='peru' backgroundColorClass='background-cream' />
            <DiscountCard discountImage={backpack} save='Save' number='59' story='Enjoy Discount on all types of Educational accesories' altText='Discount Image' fontColorClass='font-green' dollarColor='rgb(3, 58, 3)' backgroundColorClass='background-green' />
          </div>
        </div>
        <div className='home-info'>
          <div className='info-title'>
            <h4>Services To Help You Shop</h4>
          </div>
          <div className='info-cards'>
            <ShopCard shopImage={family} title='Frequently Asked Questions' description='Updates on safe shopping in our stores' altText='Shop Image' />
            <ShopCard shopImage={phone} title='Online Payment Process' description='Updates on safe shopping in our stores' altText='Shop Image' />
            <ShopCard shopImage={guy} title='Home Delivery Options' description='Updates on safe shopping in our stores' altText='Shop Image' />
            <ShopCard shopImage={gift} title='Use Gift and Prepaid Cards' description='Updates on safe shopping in our stores' altText='Shop Image' />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Home