import React from 'react';
// import logo from '/images/logo.svg';
import './header.css';

const Header = () => {
    return (
        <>
           <div className="container">
               <div className="header_img">
                   <img src={`${process.env.PUBLIC_URL + '/images/logo.svg'}`} alt=""/>
               </div>
               <div className="header_model_names">
                   <p>Model S</p>
                   <p>Model 3</p>
                   <p>Model X</p>
                   <p>Model Y</p>
                   <p>Solar Roof</p>
                   <p>Solar Panel</p>
               </div>
               <div className="header_menu">
                   <div className="account">
                   <p>Shop</p>
                   <p>Account</p>
                   </div>
                   <p>Menu</p>
               </div>
            </div> 
        </>
    )
}

export default Header;
