import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#527A9A]'>
            <footer className="footer sm:footer-horizontal container mx-auto text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Career</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">Address: Mohammadpur, Dhaka</a>
                    <a className="link link-hover">Phone: ++88012345678976</a>
                    <a className="link link-hover">Email- info@shop.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Important Links</h6>
                    <a className="link link-hover">Shop</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Condition</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Youtube</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;