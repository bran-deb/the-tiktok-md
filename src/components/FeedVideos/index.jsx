import VideoPlayer from "../VideoPlayer"
import styles from './styles.module.css'



const VIDEOS = [
    {
        id: 1,
        author: 'ruziotaku',
        description: 'En la noche live en TikTok 11:00PM regalaré 1 entrada!🥳 ',
        likes: 123,
        shares: 234,
        comments: 333,
        songName: 'sonido original - anadie  :)',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/0f59da7189b54b61b4e968bfc114b61a~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/c78b55e77d8a42b65c2283d214222f7a/621c1af0/video/tos/useast2a/tos-useast2a-ve-0068c003/c003a6e7b08d4c2f9e1236ead91488c7/?a=1988&br=1782&bt=891&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.nnz7ThPRt2DXq&l=20220227184421010223076037044A2D3D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzVlajw6ZmtxOzMzNzczM0ApNzM1ZmkzMztnN2c6Ozw6aWdnbzAucjRvcWBgLS1kMTZzczYzYWI1NS1eYDFgNWBjNjM6Yw%3D%3D&vl=&vr=',
    },
    {
        id: 2,
        author: 'ruziotaku',
        description: 'En la noche live en TikTok 11:00PM regalaré 1 entrada!🥳 ',
        likes: 123,
        shares: 234,
        comments: 333,
        songName: 'sonido original - anadie  :)',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/0f59da7189b54b61b4e968bfc114b61a~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/c78b55e77d8a42b65c2283d214222f7a/621c1af0/video/tos/useast2a/tos-useast2a-ve-0068c003/c003a6e7b08d4c2f9e1236ead91488c7/?a=1988&br=1782&bt=891&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.nnz7ThPRt2DXq&l=20220227184421010223076037044A2D3D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzVlajw6ZmtxOzMzNzczM0ApNzM1ZmkzMztnN2c6Ozw6aWdnbzAucjRvcWBgLS1kMTZzczYzYWI1NS1eYDFgNWBjNjM6Yw%3D%3D&vl=&vr=',

    }
]


export default function FeedVideos() {
    return (
        VIDEOS.map(video => (
            <div key={video.id} className={styles.item}>
                <VideoPlayer {...video} />
            </div>
        ))
    )
}