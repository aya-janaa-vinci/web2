interface FooterProps{
    text : string;
}

const Footer = (props : FooterProps) => {
return <footer>{props.text}</footer>
}

export default Footer;
