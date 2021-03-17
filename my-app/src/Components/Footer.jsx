import React from 'react';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import apStore from '../assets/appStore.svg';
import playStore from '../assets/playStore.svg';
import windowsStore from '../assets/windowsStore.svg';

function Foooter() {
    return (
        <div>
            <footer id="footer">
                <ul className="nav">
                    <li className="enlaces">
                        <a href="./home">Home<span>|</span></a>
                    </li>
                    <li>Terms and Conditions<span>|</span></li>
                    <li>Privacy Policy<span>|</span></li>
                    <li>Collection Statement<span>|</span></li>
                    <li>Help<span>|</span></li>
                    <li>Manage Account</li>
                </ul>
                <div className="text-light mt-2">
                    <p className="menu">Copyright © 2016. DEMO Streaming. All Rights Reserved.</p>
                </div>
                <div className="row justify-content-between social">
                    <div className="col-sm-6">
                        <img id="face" src={facebook} className="Footer-facebook" alt="facebook" />
                        <img id="twi" src={twitter} className="Footer-twitter" alt="twitter" />
                        <img id="inst" src={instagram} className="Footer-instagram" alt="instagram" />
                    </div>
                    <div className="col-xl-6 store">
                        <img id="apStore" src={apStore} className="Footer-apStore" alt="apStore" />
                        <img id="playStore" src={playStore} className="Footer-playStore" alt="playStore" />
                        <img id="windowsSt" src={windowsStore} className="Footer-windowsStore" alt="windowsStore" />
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Foooter;