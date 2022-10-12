import './MainPage.css';
import MainText from './mainText/MainText';
import MainFooter from './mainFooter/MainFooter';

const MainPage = () => {
    return (
        <header className="header">
            <div className='main-logo'>
                <div className="logo-animate">
                    <div className='logo-animate_stick'></div>
                    <div className='logo-animate_stick'></div>
                    <div className='logo-animate_stick'></div>
                    <div className='logo-animate_stick'></div>
                    <div className='logo-animate_stick'></div>
                    <div className='logo-animate_stick'></div>
                    <div className='logo-animate_stick'></div>
                    <div className='logo-animate_stick'></div>
                </div>
                <span className='main-logo_title'>FU<span>II</span> MUS<span>I</span>C</span>
                <span className='main-logo_undertext'>МУЗЫКАЛЬНЫЙ ЛЕЙБЛ</span>
            </div>
            <MainText />
            <div>
                <MainFooter />
                <div className='header-gradient'></div>
            </div>
        </header>
    )
}
export default MainPage;