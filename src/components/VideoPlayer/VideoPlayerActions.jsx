import { Heart } from '../Icons/Heart'
import { Comment } from '../Icons/Comment'
import styles from './styles.module.css'
import { Share } from '../Icons/Share'

export default function VideoPlayerActions({ likes = 2044, comments = 222, shares = 512, hearted = false }) {
    return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart />
                <strong title='like'>{likes}</strong>
            </div>

            <div className={styles.action}>
                <Comment />
                <strong title='comments'>{comments}</strong>
            </div>

            <div className={styles.action}>
                <Share />
                <strong title='shares'>{shares}</strong>
            </div>
        </aside>
    )
}