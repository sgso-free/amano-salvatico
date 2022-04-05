import logo from './../logo.svg';
import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">                
                <a className="navbar-brand" href="#"><img src={logo} alt="Amano" height="36" />AMano</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Jabones</a>
                        <a className="nav-item nav-link" href="#">Textiles</a>
                         <a className="nav-item nav-link" href="#">Juguetes</a>
                    </div>                    
                </div>
                <CartWidget/>
            </nav>
        </div> 
    );
}

export default Navbar;