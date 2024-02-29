import React from 'react';
import { createRoot } from 'react-dom/client';
import logo from './Images/logo.png';
import Res1 from './Images/Res1.jpg';
import star from './Images/star.png';

const Header = () => {
    return (
        <div className="header">
            <div className="LogoContainer"> 
                <img src={logo} className="logo" alt="Logo" /> 
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = () => {
    return (
        <div className="rescard" style={{backgroundColor: "#f0f0f0"}}>
            <img className="RestaurantLogo"
                alt="Restaurant logo"
                src={ Res1 }
            />
            <div className="top">
                <h3 className="Name">Barbeque Nation</h3>
                <div className="rating">
                    <h5 class="value">4.0</h5>
                    <img className="star" src={star}></img>
                </div>           
            </div>
            <h6 className="quick">North Indian, BBQ</h6>
            <h5 className="Loc">Kaonli, Dehradun</h5>
        </div>
    );
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className='restaurant-container'>
                <RestaurantCard />
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = createRoot(document.getElementById("root0"));
root.render(<AppLayout />);
