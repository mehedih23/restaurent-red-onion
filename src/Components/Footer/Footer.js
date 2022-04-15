import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer text-light'>
            <div className='container py-5 d-flex justify-content-between'>
                <div>
                    <img src="https://i.ibb.co/9sSxGqS/logo.png" alt="footer" />
                </div>
                <div className='d-flex justify-content-evenly'>
                    <div className='mx-5'>
                        <p>About Food</p>
                        <p>Read Our Blogs</p>
                        <p>Sign Up To Deliver</p>
                        <p>Add To Restaurant</p>
                    </div>
                    <div className='mx-5'>
                        <p>Get Help</p>
                        <p>Read FAQs</p>
                        <p>View All Cities</p>
                        <p>Restaurants Near Me</p>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-between'>
                <div>
                    <p className='text-muted m-0'>Copyright reserved &copy; {new Date().getFullYear()} By Red Onion</p>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <p className='mx-5'>Privacy Policy</p>
                    <p className='mx-5'>Terms of use</p>
                    <p className='mx-5'>Pricing</p>
                </div>
            </div>
        </div>
    )
}

export default Footer