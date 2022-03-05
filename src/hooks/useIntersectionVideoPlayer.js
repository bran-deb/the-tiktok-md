import { useEffect, useState } from "react"


// let previusHandlePlay = null

const options = {
    root: document.querySelector('main'),//selecciona el que tiene scroll-snap
    rootMargin: '0px',
    threshold: 0.9
}
//manda los datos del window con un callback y las options
const observer = new window.IntersectionObserver((entries) => {
    //por cada entrada obtiene el target y isintersectado
    entries
        .forEach(entry => {
            const { target, isIntersecting } = entry
            target._handleIntersect(isIntersecting)
        })
}, options)

export default function useIntersectionVideoPlayer({ video }) {
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        if (!video.current) return               //si el video no es el actual no hace ninguna accion

        observer.observe(video.current)         //observa el video actual
        //verifica si fue intersectado o se muestra
        video.current._handleIntersect = (isIntersecting) => {
            const { current: videoActual } = video
            //si es videoactual se muestra play
            isIntersecting
                ? videoActual.play()
                : videoActual.pause()
            setPlaying(!videoActual.paused)
        }
    }, [video.current])

    //cada que se ejecuta el hook vuelve a ejecutar handleplay
    const handlePlay = () => {
        //destructuring de video y renombrado de current
        const { current: videoActual } = video
        playing
            ? videoActual.pause()
            : videoActual.play()

        setPlaying(!playing)
    }
    //},[])
    // console.log(previusHandlePlay === handlePlay);
    // //guarda la funcion en una variable
    // previusHandlePlay = handlePlay

    return {
        handlePlay,
        playing
    }
}