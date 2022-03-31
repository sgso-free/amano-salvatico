import cart from './../recursos/cart.png';
 function CartWidget () {
        return(
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link" > <img src={cart} alt="Cart" height="36" /> 8 - Articulos</a>
           </div>
        )
 }
 export default CartWidget;
 
 /*class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"*/
 