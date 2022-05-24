import './InfoArtists.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';
import Vk from '../../../resourses/img/Vkontakte.svg';


export default function InfoArtists({ imageIndex, artists }) {
    const infoArt = artists.filter(item => item.id === imageIndex)
    const writeInfo = infoArt.map(item => <div className='info-text'>
        <button className='info-music'><a href={item.music}><MusicNoteIcon style={{ 'width': '30px' }} /></a></button>
        <div className='info-text-name'>{item.name}</div>
        <div className="social"><span><a href={item.inst}><InstagramIcon /></a></span>
            <span><a href={item.vk}><img src={Vk} alt="vk" /></a></span>
        </div >
    </div >)
    return (<div className='all-info'>
        {writeInfo}
    </div>
    )
}