import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'


export default function VideoPlayer({ src }) {

    const [playing, setPlaying] = useState(false)
    const video = useRef(null)

    const handlePlay = () => {
        //destructuring de video y renombrado de current
        const { current: videoElement } = video
        playing
            ? videoElement.pause()
            : videoElement.play()

        setPlaying(!playing)
    }
    //ClassName dinamica de boton play(default{conditional})
    const playerClassName = clsx(
        styles.player,                  //default
        { [styles.hidden]: playing }    //si esta playing:true es hidden
    )

    return (
        <div className={styles.wrapper}>
            <video
                muted
                loop
                className={styles.video}
                controls={false}
                src={src}
                ref={video}
                onClick={handlePlay}
            />
            <i
                className={playerClassName} //classname dinamica
                onClick={handlePlay} />
            <VideoPlayerActions />
        </div>
    )
}