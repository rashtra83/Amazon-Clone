import React from 'react'
import "./Footer.css"

function Footer() {

    const backToTop = () => {
        return (document.documentElement.scrollTop = 0);
    }

    return (
        
            <div className="footer">
                <div onClick={backToTop} className="footer__backtoTop">
                    Back to Top
                </div>
                <div className="footer__details">
                    <div className="footer__gettoknowus">
                        <div className="footer__heading">Get to Know Us</div>
                        <div className="footer__items">
                            <div className="footer__li">About Us</div>
                            <div className="footer__li">Careers</div>
                            <div className="footer__li">Press Releases</div>
                            <div className="footer__li">Amazon Cares</div>
                            <div className="footer__li">Gift a Smile</div>
                        </div>
                    </div>
                    <div className="footer__connectwithus">
                        <div className="footer__heading">Connect with Us</div>
                        <div className="footer__items">
                            <div className="footer__li">Facebook</div>
                            <div className="footer__li">Twitter</div>
                            <div className="footer__li">Instagram</div>
                        </div>
                    </div>
                    <div className="footer__makemoneywithus">
                        <div className="footer__heading">Make Money with Us</div>
                        <div className="footer__items">
                            <div className="footer__li" >Sell on Amazon</div>
                            <div className="footer__li">Sell under Amazon Accelerator</div>
                            <div className="footer__li">Amazon Global Selling</div>
                            <div className="footer__li">Become an Affiliate</div>
                            <div className="footer__li">Fulfilment by Amazon</div>
                            <div className="footer__li">Advertise Your Products</div>
                            <div className="footer__li">Amazon Pay on Merchants</div>
                        </div>
                    </div>
                    <div className="footer__letushelpyou">
                        <div className="footer__heading">Let Us Help You</div>
                        <div className="footer__items">
                            <div className="footer__li">COVID-19 and Amazon</div>
                            <div className="footer__li">Your Account</div>
                            <div className="footer__li">Returns Centre</div>
                            <div className="footer__li">100% Purchase Protection</div>
                            <div className="footer__li">Amazon App Download</div>
                            <div className="footer__li">Amazon Assistant Download</div>
                            <div className="footer__li">Help</div>
                        </div>
                    </div>
                </div>
                <div className="footer__end">
                    © 1996-2021, Amazon.com, Inc. or its affiliates
                </div>
            </div> 
        
    )
}

export default Footer
