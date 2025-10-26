interface HeaderProps {
    logo : string;
    children : React.ReactNode;
}

const Header = (props : HeaderProps) => {
    return(
<header className="header">
    <img src={props.logo} alt="logo" className="logo"/>
    <div>{props.children}</div>
</header>
    );
};

export default Header;