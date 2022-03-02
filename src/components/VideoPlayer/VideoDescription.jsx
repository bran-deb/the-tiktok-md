import AlbumDisk from '../VideoDescription/AlbumDisk'
import SongTicker from '../SongTicker'
import styles from './styles.module.css'

export const VideoDescription = ({ author, description, albumCover, songTitle }) => {
    return (
        <footer className={styles.description}>

            <div>
                <strong>
                    <a className={styles.author}
                        href={`/user/${author}`}>
                        @{author}
                    </a>
                </strong>
                <p
                    className={styles.text}>
                    {description}
                </p>
                <SongTicker songTitle={songTitle} />
            </div>

            <div>
                <AlbumDisk albumCover={albumCover} />
            </div>

        </footer>
    )
}

