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
        songTitle: 'sonido original - anadie  :)',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/0f59da7189b54b61b4e968bfc114b61a~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/5413924f50a475631ee0de81458e7a7b/62201f12/video/tos/useast2a/tos-useast2a-pve-0068/8e362bef7b7c4d57a463373a339e168a/?a=1988&br=716&bt=358&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=XOQ9-3.nnz7ThDitcDXq&l=2022030219505101022307716916062CFD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQzOjQ6Zmo3OzMzNzgzM0ApPGZmZDU4OWU5NzY8aGQzNGdsbmVlcjRnZmNgLS1kLzZzczNfY2A0YzIyNC80LS9hXmM6Yw%3D%3D&vl=&vr=',
    },
    {
        id: 2,
        author: 'ruziotaku',
        description: 'En la noche live en TikTok 11:00PM regalaré 1 entrada!🥳 ',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'sonido original - anadie  :)',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/0f59da7189b54b61b4e968bfc114b61a~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/6217136729d68a0c1f9b0676db68128e/62201f4c/video/tos/useast2a/tos-useast2a-ve-0068c004/1228e673b7b148a6b8a4e7c4cafc0c23/?a=1988&br=2734&bt=1367&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.nnz7ThqitcDXq&l=2022030219505101022307716916062CFD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs3Zzs6Zm84OjMzNzczM0ApNjc1OGU8NWVpNzM6ZGdmO2c1Y21pcjRfZ2pgLS1kMTZzc2MyYDZeYC9eYDVgX14tMDA6Yw%3D%3D&vl=&vr=',
    },
    {
        id: 3,
        author: 'ruziotaku',
        description: 'En la noche live en TikTok 11:00PM regalaré 1 entrada!🥳 ',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'sonido original - anadie  :)',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/0f59da7189b54b61b4e968bfc114b61a~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/cf430766735665bec7b5cf3ef012c024/622021f7/video/tos/useast2a/tos-useast2a-ve-0068c004/596f450358954a01b6cdc91d8947c2a4/?a=1988&br=5898&bt=2949&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.nnz7ThHEtcDXq&l=20220302200324010223128230240811EB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anJ3azs6ZjxqOzMzNzczM0ApaTM7Ojk4OmVlNzU8Nzw5NWdwLm5fcjRfaWJgLS1kMTZzczEwLS9gYDIuYC5gMS9hYmI6Yw%3D%3D&vl=&vr=',
    },
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