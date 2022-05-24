import Slider from "react-slick";
import './SliderArtists.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SliderArtists({ onSwap, imageIndex, artists }) {


    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <ArrowForwardIosIcon />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <ArrowForwardIosIcon />
            </div>
        );
    };


    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => onSwap(next)
    };
    return (
        <div className="allInCarousel">
            <Slider {...settings}>
                {artists.map((item, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={item.image} alt={item.image} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}