import './NavBar.css';

const MainNav = () => {
    return (
        <div className="MainNav">
            <div className='MainNavLeft'>
                <div className='LogoImgDiv d-none d-sm-block'>
                    <img className='LogoImg' src={'/mainlogo.svg'} alt="logo" />
                </div>
                <div className='searchSection'>
                    <div className='inputDiv'>
                        <input type='text' placeholder='Search products and more' />
                        <img src={'/svg.svg'} alt="search" />
                    </div>
                    <div>
                        <ul>
                            <li>Savings <img className='downarrow' src={'/downarrow.svg'} alt="downarrow" /></li>
                            <li>Order ahead <img className='downarrow' src={'/downarrow.svg'} alt="downarrow" /></li>
                            <li>Catering</li>
                            <li>Delivery & curbside
                                <img className='deliverycurbside.svg' src={'/deliverycurbsidesvg.svg'} alt="deliverycurbsidesvg" />
                            </li>
                            <li>Weekly ad</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='MainNavRight'>
                <div>
                    <ul>
                        <li><img className='ShoppingList' src={'/ShoppingList.svg'} alt="ShoppingList" /> Shoping list</li>
                        <li><img className='Cart' src={'/Cart.svg'} alt="Cart" /> Cart</li>
                        <li><button className='login'>Log in</button></li>
                        <li><button className='signup'>Sign up</button></li>
                    </ul>
                </div>
                <div>
                    <p>Choose a store</p>
                </div>
            </div>
        </div>
    )
}

export default MainNav