import logo from './../logo.svg';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">                
                <Link to='/' className="navbar-brand" href="#"><img src={logo} alt="Amano" height="36" />AMano</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/category/1' className="nav-item nav-link active" href="#">Jabones</Link>
                        <Link to='/category/2' className="nav-item nav-link" href="#">Textiles</Link>
                         <Link to='/category/3' className="nav-item nav-link" href="#">Juguetes</Link>
                    </div>                    
                </div>
                <CartWidget/>
            </nav>
        </div> 
    );
}

export default Navbar;