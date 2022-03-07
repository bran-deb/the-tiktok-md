import clsx from 'clsx'

import { useEffect, useRef, useState } from 'react'
import VideoPlayerActions from './VideoPlayerActions'
import { VideoDescription } from '../VideoDescription'
import styles from './styles.module.css'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'


export default function VideoPlayer(props) {
    const { src } = props

    const video = useRef(null)
    const { playing, handlePlay } = useIntersectionVideoPlayer({ video })
    //ClassName dinamica de boton play(default{conditional})
    const playerClassName = clsx(
        styles.player,                  //default
        { [styles.hidden]: playing }    //si esta playing:true es hidden
    )

    return (
        <div className={styles.wrapper}>
            <video
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
            <VideoPlayerActions {...props} />
            <VideoDescription {...props} />
        </div>
    )
}