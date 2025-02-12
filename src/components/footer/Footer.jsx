import React from 'react'
import './footer.css'

const Footer = () => {
return (
    <>
        <footer>
            <div className="container">
                <div className="box">
                    <ul className="flex">
                        <li>Terms of use</li>
                        <li>Privacy-Policy</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Watch List</li>
                    </ul>
                    <p> 2024 All Right Reserved || Ahmad Mustafa</p>
                </div>
                <div className="box">
                    <h3>Follow Us</h3>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <div className="box">
                    <h3>Streamit App</h3>
                    <div className="img flexSB">
                        <img src="https://img.icons8.com/color/48/00000/apple-app-store--v3.png" alt="" />
                        <span>App Store</span>
                        <img src="https://img.icons8.com/fluency/48/00000/google-play.png" alt="" />
                        <span>Google Play Store</span>
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}

export default Footer
