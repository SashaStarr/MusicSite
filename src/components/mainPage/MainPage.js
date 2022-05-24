import './MainPage.css';
import Logo from '../../resourses/img/Logo.png';
import MainText from './mainText/MainText';
import MainFooter from './mainFooter/MainFooter';

const MainPage = () => {
    return (
        <header className="header">
            <span><img src={Logo} alt='logo' /></span>
            <MainText />
            <div>
                <MainFooter />
                <div className='header-gradient'></div>
            </div>
        </header>
    )
}
export default MainPage;