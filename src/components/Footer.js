import { Link  } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>App Done with react. <Link to='/about'>about APP</Link></p>
        </footer>
    );
}

export default Footer;