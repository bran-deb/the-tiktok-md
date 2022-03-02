
import Marquee from 'react-fast-marquee'

import MusicIcon from '../Icons/MusicIcon'
import styles from './styles.module.css'


export default function SongTicker({ songTitle }) {
    return (
        <div className={styles.song}>
            <MusicIcon />
            <Marquee gradient={false} speed={80}>
                {songTitle}
            </Marquee>
        </div>
    )
}