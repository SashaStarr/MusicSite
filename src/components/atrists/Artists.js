import './Artists.css'
import SliderArtists from './sliderArtists/SliderArtists';
import Buble from '../../resourses/img/bubule.png';
import Rectage from '../../resourses/img/3.png';
import { useState, useMemo } from 'react';
import Guma from '../../resourses/img/artists/guma2.jfif';
import Nikki from '../../resourses/img/artists/Niki.jpg';
import Nijar from '../../resourses/img/artists/nijar.jfif';
import InfoArtists from './infoArtists/InfoArtists'

export default function Artists() {
    const [imageIndex, setImageIndex] = useState(0);

    const onSwap = (data) => {
        setImageIndex(data)
    }
    const artists = useMemo(() => [
        {

            id: 0,
            name: "GUMA",
            inst: "https://www.instagram.com/guma_nastya/",
            vk: "https://vk.com/nastya_gum",
            music: "#",
            image: Guma,
        },
        {

            id: 1,
            name: "NIKKI",
            inst: "#",
            vk: "#",
            music: "#",
            image: Nikki,
        },
        {
            id: 2,
            name: "TEMNEE",
            inst: "#",
            vk: "#",
            music: "#",
            image: Nijar,
        },
        {
            id: 3,
            name: "Nijar",
            inst: "#",
            vk: "#",
            music: "#",
            image: Guma,
        }
    ], [])
    return (
        <main>
            <SliderArtists imageIndex={imageIndex} onSwap={onSwap} artists={artists} />
            <InfoArtists imageIndex={imageIndex} artists={artists} />
            <span className='buble'><img src={Buble} alt='buble'></img></span>
            <span className='rectage'><img src={Rectage} alt='rectage'></img></span>
        </main>
    )
}