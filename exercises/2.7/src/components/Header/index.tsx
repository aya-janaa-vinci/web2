import "./Header.css";

interface HeaderProps {
    urlLogo : string ; 
    children : React.ReactNode; 
}

const Header = (props : HeaderProps) => { //props.children = emplacement dans mon composant où ce contenu s’affiche
    return(
        <header className="header">
            <img src={props.urlLogo} alt="logo" className="logo"/>
            <div>{props.children}</div>
        </header>
    );
};

export default Header;