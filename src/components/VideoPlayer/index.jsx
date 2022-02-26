import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/8e3595165361140a0844d6b0cb025e9c/621a0833/video/tos/useast2a/tos-useast2a-ve-0068c004/e619aecff93b4162b854fd9d8cd15ec1/?a=1988&br=3488&bt=1744&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.nnz7Thsr22DXq&l=202202260459520102230160200A3BBC1E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amt3eDw6Zmx4OjMzNzczM0ApMzk4ZmloZWVpN2Y6OGc0ZGdxYm5wcjRfL3NgLS1kMTZzc2IxYy1fLTZgXmAzYy5fMGI6Yw%3D%3D&vl=&vr='

export default function VideoPlayer() {

    const [playing, setPlaying] = useState(false)
    const video = useRef()

    const handlePlay = () => {
        if (playing) {
            video.current.pause()
        } else {
            video.current.play()
        }
        setPlaying(!playing)
    }


    return (
        <div>
            <video
                muted
                className={styles.video}
                src={SRC}
                controls={false}
                ref={video}
            />
            <button
                className={styles.player}
                onClick={handlePlay}>
            </button>
        </div>
    )
}