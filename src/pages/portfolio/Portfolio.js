import "./style.css";
import f from './../../img/1.jpg';
import m from './../../img/2.jpg';
import k from './../../img/3.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio__conteiner">
                    <p className="portfolio__header">Portfolio</p>
                    <div className="portfolio__page">
                        <img src={f} alt="" className="img"/>
                        <p1 className="text">Description of the site</p1>
                    </div>
                    <div className="portfolio__page">
                        <img src={m} alt="" className="img"/>
                        <p1 className="text">Description of the site</p1>
                    </div>
                    <div className="portfolio__page">
                        <img src={k} alt="" className="img"/>
                        <p1 className="text">Description of the site</p1>
                    </div>
            </div>
        
        </div>
    );
}

export default Portfolio;