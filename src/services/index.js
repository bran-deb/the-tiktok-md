import { supabase } from "./supabase"

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL


//sube un archivo al supabaseStore
export const uploadVideo = async ({ videoFile }) => {
    const filename = window.crypto.randomUUID()

    const { data, error } = await supabase.storage
        .from('videos')
        .upload(`uploads/${filename}.mp4`, videoFile)

    const file = data?.Key ? `${prefix}${data.Key}` : ''
    return [error, file]
}

//publica un video en la app
export const publishVideo = async ({ videoSrc, description }) => {

    const defaultAlbum = 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/6c847ab2090448edb654b75e0f055ef6~c5_200x200.jpeg'

    const defaultSong = 'bran-deb-songs'
    const { data, error } = await supabase
        .from('videos')
        .insert([
            {
                user_id: 'b9d9a9ec-43b0-46ad-9e90-b63aea3217ad',
                description,
                albumCover: defaultAlbum,
                songTitle: defaultSong,
                src: videoSrc,
            }
        ])

    return [error, data]
}

//previously activated video policies
//obtiene de la tabla videos todos los datos y el nombre y username de user_id(fk)
export const getVideos = async () => {
    const { data: videos, error } = await supabase
        .from('videos')
        .select(`*,
            user:user_id(
                avatar,
                username,
                id
            )`)
        .order(
            'created_at',
            { ascending: false }
        )
    //user el es alias de user_id


    return [error, videos]
}