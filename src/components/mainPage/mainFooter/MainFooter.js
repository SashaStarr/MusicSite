import QrImg from '../../../resourses/img/QrImg.png';
import './MainFooter.css';
import Inst from '../../../resourses/img/instagram.png';
import Vk from '../../../resourses/img/vkontakte.png';

export default function MainFooter() {

    const onScroll = () => {
        window.scrollBy({ top: window.innerHeight + 20, behavior: "smooth" });
    }

    return (
        <div className="header-footer">
            <div className="soc-icons">
                <span><a href='#'><img src={Inst} alt="instagram" /></a></span>
                <span><a href='https://vk.com/full__music'><img src={Vk} alt="vk" /></a></span>
            </div>
            <button className="header-footer-button" onClick={onScroll}>
                <div className="qr">
                    <span><img src={QrImg} alt="qrImage" /></span>
                </div>
            </button>
        </div>
    )
}