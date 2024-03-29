import React from 'react'
import './style.css'
import Logo from './Logo'
import { Helmet } from 'react-helmet'
import Badge from '@mui/material/Badge';




function Navbar() {
    return (
        <>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                <meta charset="utf-8" />
            </Helmet>
            <div className='navhaed'>
                <div className='mt-2'>
                    <a href='#About us' className='ms-5'> About Us  | </a>
                    <a href='#My Account' className='mx-1'> My Account | </a>
                    <a href='#Wishlist' className='mx-1'> Wishlist | </a>
                    <a href='#order Tracking' className='mx-1'> Oder Tracking | </a>
                </div>
                <div className='mt-2'>
                    <span>  Supper Value Deals- Save more with cupons </span>
                </div>
                <div className='mt-2 '>
                    <span> Need help? Call Us: + <span style={{ color: "#3BB77E" }}> 1800 900</span> | </span>
                    <select className='ms-2 lang'>
                        <option> English</option>
                        <option> Hindi </option>
                        <option> Gujarati </option>
                    </select>
                    <select className='ms-3 lang'>
                        <option> USD</option>
                        <option> INR </option>
                        <option> CAD </option>
                    </select>
                </div>
            </div >
            <hr className='hr' />
            <div className='secondnav '>
                <div>
                    <Logo />
                </div>
                <div className='search '>
                    <div className='d-flex gap-2'>
                        <select className='p-2 Categories'>
                            <option> All Categories</option>
                            <option> Milk and Dairies</option>
                            <option> Clorthing and beauty</option>
                            <option> Wine and alcohol </option>
                            <option> Pets food and Toys </option>
                        </select>
                        <input className='searchbar' type='text' placeholder='Search for items...' />
                    </div>
                    <div>
                        <i class="fa-solid fa-magnifying-glass " id='search_icon'></i>
                    </div> &nbsp; &nbsp;
                </div>
                <div>
                    <select id='location' className='p-1'>
                        <option> Your Location</option>
                        <option> Ahmedabad</option>
                        <option> Gandhinagar</option>
                        <option> Rajkot </option>
                    </select>
                </div>
                <div className='icon-font'>

                    <Badge badgeContent={3} color="success" >
                        <i class="fa-solid fa-recycle" id='icons'> </i>
                    </Badge>Compare
                    <Badge badgeContent={6} color="success" >
                        <i class="fa-regular fa-heart" id='icons'></i>
                    </Badge>Wishlist
                    <Badge badgeContent={2} color="success" >
                        <i class="fa-solid fa-cart-shopping" id='icons'></i>
                    </Badge> Cart

                    <i class="fa-solid fa-person" id='icons'></i> Account
                </div>
            </div >
            <hr className='hr' />
            <div className='p-1  mx-5 d-flex main_nav' >
                <button className=' brbtn'>
                    <i class="fa-solid fa-table-cells-large"></i>
                    &ensp; Browse All Categories </button>
                <div id='three'>
                    <a href=' '> <i class="fa-solid fa-fire"></i> Deals </a>
                    <a href=' ' style={{ color: "#3BB77E" }}> <b> Home </b>  </a> <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> About </a>
                    <a href=' '> Shop </a>  <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Venders </a>   <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Mega Menu </a>   <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Blog </a>   <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Page </a>   <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Contact </a>
                </div>
                <i class="fa-solid fa-headphones headphones"></i>
                <div className='d-flex flex-column contact'>
                    <span className='number'> <b> 1900-888</b></span>
                    <span> 24/7 Supoort Center</span>
                </div>
            </div>
            <hr className='hr' />
        </>
    )
}
export default Navbar