import "./Header.css";

interface HeaderProps {
    urlLogo : string ; 
    children : React.ReactNode; 
    theme : "light" | "dark";
}

const Header = ({urlLogo, children, theme}: HeaderProps) => { //props.children = emplacement dans mon composant où ce contenu s’affiche
    return(
        <header className="header" style={{
            backgroundColor: theme === "dark" ? "black" : "white",
            color: theme === "dark" ? "white" : "black"
        }}>
            <img src={urlLogo} alt="logo" className="logo"/>
            <div>{children}</div>
        </header>
    );
};

export default Header;