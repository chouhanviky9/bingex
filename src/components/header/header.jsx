import './header.css';
import logo from '../../assets/images/bingeX.jpg';
import profile from '../../assets/images/default_profile.jpg';
function Header() {
    return (
        <header><img src={logo} alt="logo" height="80px" />
        <div className="account" >
            <div className="profile_pic">
            {/* <img   src={profile} alt="profile" height="80px" /> */}
            </div>
            <div className="arrow-down"></div>
            <div className="drop"></div>
            <div className="profile">
                Binge : 50<br/>
                Vikas Chouhan
            </div>
        </div>
        
        </header>
    )
}

export default Header;