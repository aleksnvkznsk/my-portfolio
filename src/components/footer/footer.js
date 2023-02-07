import "./style.css";
import github from './../../img/github.png';
import telegram from './../../img/telegram.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__src">
                    <a href="https://github.com/aleksnvkznsk" target=" blank"><img src={github} alt="" className="footer__icon"/></a>
                    <a href="https://t.me/aleks_nvkz" target=" blank"><img src={telegram} alt="" className="footer__icon"/></a>
                </div>
                <div className="footer__data">
                    <p>Novosibirsk 2023</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;