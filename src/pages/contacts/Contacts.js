import "./style.css";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__conteiner">
                <h1 className="contacts__header">Contacts</h1>
                <div className="href">
                    <h1 className="contacts__text">GitHub</h1>
                    <h1 className="contacts__href">https://github.com/aleksnvkznsk</h1>
                </div>
                <div className="href">
                    <h1 className="contacts__text">Telegram</h1>
                    <h1 className="contacts__href">+7 913 298 57 12 / aleks_nvkz</h1>
                </div>
                <div className="href">
                    <h1 className="contacts__text">Mail</h1>
                    <h1 className="contacts__href">aleksandrov.nsk.nvkz@gmail.com</h1>
                </div>
            </div>
        </div>
    );
}

export default Contacts;