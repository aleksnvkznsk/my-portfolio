
import "./style.css";


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__inner">
                    <div className="header__logo">Alex Alexandrov</div>
                    <nav className="nav">
                        <a className="nav__link" href="/">Home</a>
                        <a className="nav__link" href="/portfolio">Portfolio</a>
                        <a className="nav__link" href="/contacts">Contacts</a>
                    </nav>
                </div>
            </div>
        </header>);
}

export default Header;