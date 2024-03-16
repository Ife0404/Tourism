import React from 'react';
import './Home.css';
import Navbar from '../../Navbar/Navbar';
import Button from "../../Button/Button";
import Footer from '../../Footer/Footer';
import ImageCard from '../../ImageCard/ImageCard';
import green from '../../../../Images/png/chair.png';
import handbag from '../../../../Images/png/hbag.png';
import books from '../../../../Images/png/book.png';
import tech from '../../../../Images/png/gadget.png';
import shoe from '../../../../Images/png/shoe.png';
import travel from '../../../../Images/png/travel2.png';

function Home() {
  return (
    <div className='Main>'>
      <Navbar />
      <div className='Home'>
        <div className='home-content'>
          <div className='home-details'>
            <div className='home-paragraph'>
              <p>Shopping And Department Store.</p>
            </div>
            <div className='home-description'>
              <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
            </div>
            <Button type='button' text={'Learn More'} class='learn-more' />
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>
            <h4>Shop Our Top Categories</h4>
          </div>
          <div className='home-card'>
            <ImageCard yourImage={green} altText='Your Image' labelText='Furniture' />
            <ImageCard yourImage={handbag} altText='Your Image'labelText='Hand Bag' />
            <ImageCard yourImage={books} altText='Your Image' labelText='Books' />
            <ImageCard yourImage={tech} altText='Your Image' labelText='Tech' />
            <ImageCard yourImage={shoe} altText='Your Image' labelText='Sneakers' />
            <ImageCard yourImage={travel} altText='Your Image' labelText='Travel' />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Home