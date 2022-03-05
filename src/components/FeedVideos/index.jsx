import { useState, useEffect } from "react";
import { getVideos } from "../../services/index.js";
import VideoPlayer from "../VideoPlayer"
import styles from './styles.module.css'


export default function FeedVideos() {
    const [videos, setVideos] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        getVideos().then(([error, videos]) => {
            if (error) return setError(error)
            setVideos(videos)
        })
    }, [])

    if (error) {
        return (
            <span>{error}</span>
        )
    }

    return (
        videos.map(video => {
            const { user = {} } = video
            const { avatar, username } = user

            return (
                <div key={video.id} className={styles.item}>
                    <VideoPlayer
                        {...video}
                        avatar={avatar}
                        username={username}
                    />
                </div>
            )
        })
    )
}