import { Heart } from '../Icons/Heart'
import { Comment } from '../Icons/Comment'
import { Share } from '../Icons/Share'
import styles from './styles.module.css'

export default function VideoPlayerActions({ username, avatar, likes = 2044, comments = 222, shares = 512, hearted = false }) {
    const handleLike = () => {
        alert('like')
    }
    const handleComment = () => {
        alert('comment')
    }
    const handleShare = () => {
        alert('share')
    }

    return (
        <aside className={styles.actions}>

            <div className={styles.user}>
                <img alt={username} src={avatar} />
                <img src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' />
            </div>

            <button onClick={handleLike} className={styles.action}>
                <Heart width='45' />
                <span title='like'>{likes}</span>
            </button>

            <button onClick={handleComment} className={styles.action}>
                <Comment width='45' />
                <span title='comments'>{comments}</span>
            </button>

            <button onClick={handleShare} className={styles.action}>
                <Share width='45' />
                <span title='shares'>{shares}</span>
            </button>

        </aside>
    )
}