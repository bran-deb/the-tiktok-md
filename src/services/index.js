import { supabase } from "./supabase"

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
    //user el es alias de user_id


    return [error, videos]
}