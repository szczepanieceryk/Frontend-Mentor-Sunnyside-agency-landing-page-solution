import React from 'react';

import EggImage from '../images/mobile/image-transform.jpg';
import GlassImage from '../images/mobile/image-stand-out.jpg';

import Client1Image from '../images/image-emily.jpg';
import Client2Image from '../images/image-thomas.jpg';
import Client3Image from '../images/image-jennie.jpg';

import ConeImage from '../images/mobile/image-gallery-cone.jpg';
import ConeImageDesktop from '../images/desktop/image-gallery-cone.jpg';

import MilkBottlesImage from '../images/mobile/image-gallery-milkbottles.jpg';
import MilkBottlesImageDekstop from '../images/desktop/image-gallery-milkbottles.jpg'

import OrangeImage from '../images/mobile/image-gallery-orange.jpg';
import OrangeImageDesktop from '../images/desktop/image-gallery-orange.jpg';

import SuggarCubesImage from '../images/mobile/image-gallery-sugar-cubes.jpg';
import SuggarCubesImageDesktop from '../images/desktop/image-gallery-sugarcubes.jpg';

import '../styles/App.css';


const HomePage = () => {
    return (
        <div className="home-page">
            <div className="header-section">
                <h3 className="header-title">We are creatives</h3>
                <svg className="arrow-down" width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15" /></g></svg>
            </div>
            <div className="egg-section" id="one">
                <img className="egg-image" src={EggImage} alt="egg on a yellow background" />
            </div>
            <div className="about-us-section" id="two">
                <h3><strong>Transform your brand</strong></h3>
                <span>
                    We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </span>
                <a className="lern-more" href="">lern more</a>
            </div>
            <div className="stand-out-section" id="three">
                <img src={GlassImage} alt="glass" />
                <div className="content" id="four">
                    <h3><strong>Stand out to the right audience</strong></h3>
                    <span>
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                    </span>
                    <a className="lern-more" href="">lern more</a>
                </div>
            </div>
            <div className="graphic-design-section" id="five">
                <h3><strong>Graphic design</strong></h3>
                <span>
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                </span>
            </div>
            <div className="photography-section" id="six">
                <h3><strong>Photography</strong></h3>
                <span>
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </span>
            </div>
            <div className="clients-testimonials-section" id="seven">
                <h3>Client testimonials</h3>
                <div className="single-testimonial">
                    <img src={Client1Image} alt="women" />
                    <p>
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <span>
                        <strong>Emily R.</strong>
                    </span>
                    <span className='proffesion'>
                        Marketing Director
                    </span>
                </div>
                <div className="single-testimonial">
                    <img src={Client2Image} alt="man" />
                    <p>
                        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                    </p>
                    <span>
                        <strong>Thomas S.</strong>
                    </span>
                    <span className='proffesion'>
                        Chief Operating Officer
                    </span>
                </div>
                <div className="single-testimonial">
                    <img src={Client3Image} alt="women" />
                    <p>
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <span>
                        <strong>Jennie F.</strong>
                    </span>
                    <span className='proffesion'>
                        Business Owner
                    </span>
                </div>
            </div>
            <div className="images-gallery-section" id="eight">
                <img className="mobile-image" src={MilkBottlesImage} alt="milt bottles" />
                <img className="desktop-image" src={MilkBottlesImageDekstop} alt="milt bottles" />
                <img className="mobile-image" src={OrangeImage} alt="orange" />
                <img className="desktop-image" src={OrangeImageDesktop} alt="orange" />
                <img className="mobile-image" src={ConeImage} alt="ice cone" />
                <img className="desktop-image" src={ConeImageDesktop} alt="ice cone" />
                <img className="mobile-image" src={SuggarCubesImage} alt="suggar cubes" />
                <img className="desktop-image" src={SuggarCubesImageDesktop} alt="suggar cubes" />
            </div>
        </div>
    );
}

export default HomePage;