import './NavBar.css';

const Topnav = () => {
    return(
        <div>

            <div className="TopNav">
                <ul>
                    <li>Catering</li>
                    <li>Gift Cards</li>
                    <li>Order Sushi</li>
                    <li>Order Subs</li>
                    <li>Weekly Ad</li>
                    <li>Pharmacy</li>
                </ul>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-sm-none d-block">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='LogoImg' src={'/mainlogo.svg'} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
     Menu
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Catering</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gift Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Order Sushi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Order Subs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Weekly Ad</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pharmacy</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        </div>

    )
}


export default Topnav

// import './NavBar.css';
// import { TopNavList } from "./../NavBar/constants" ;

// const Topnav = () => {
//     return(
//         <div className="TopNav">
//             <ul>
//             {TopNavList.map( (item, i) => {
//                     return <li key={i}>{item}</li>
//                 })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Topnav