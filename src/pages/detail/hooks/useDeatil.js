import { useEffect, useRef, useState } from "react"
import Store from "../../../utils/Store"
import Api from "../../../utils/Api"


export default function useDetail() {

    const [tab, setTab] = useState(1)
    const [time, setTime] = useState('30')
    const timer = useRef(null)

    Store.useListener('autosave', async (body, path) => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
        }
        timerNewFunc(body, path)
    })

    Store.useListener('stopAutosave', (data) => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
            setTime('30')
        }
    })

    const saveNow = async () => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
            setTime('30')
        }
    }

    const timerNewFunc = async (body, path) => {
        let date = new Date().getTime();
        const finish = date + 30000;

        let timerAnimation = async () => {
            let currentTime = new Date().getTime();
            if (currentTime > finish) {
                setTime('30')
                cancelAnimationFrame(timer.current)

                let res = await Api.asyncPut(path, body)

                if(res !== 'error') {
                    return console.log('update coin')
                }
            } else {
                setTime(((finish - currentTime) / 1000).toFixed(0));
                timer.current = requestAnimationFrame(timerAnimation)
            }
        }

        timer.current = requestAnimationFrame(timerAnimation)
    }

    useEffect(() => {

        return () => {
            if(timer.current) {
                cancelAnimationFrame(timer.current)
            }
        }
    }, [])

    return {
        tab,
        setTab,
        time,
        saveNow
    }
}