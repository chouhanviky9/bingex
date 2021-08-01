import './header.css';
import logo from '../../assets/images/bingeX.jpg';
function Header(){
    return (
        <header><img src={logo}  alt="logo" height="80px" /><h1>Account logo and bing amount</h1></header>
    )
}

export default Header;