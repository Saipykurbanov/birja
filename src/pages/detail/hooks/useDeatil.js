import { useEffect, useRef, useState } from "react"
import Store from "../../../utils/Store"
import Api from "../../../utils/Api"
import utils from "../../../utils/utils"
import Notice from "../../../components/notice/Notice"


export default function useDetail() {

    const [tab, setTab] = useState(1)
    const [time, setTime] = useState('30')
    const [lastTime, setLastTime] = useState('')
    const [obj, setObj] = useState({})
    const timer = useRef(null)

    Store.useListener('autosave', async (obj) => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
        }
        setObj(obj)
        timerNewFunc(obj.data, obj.path)
    })

    Store.useListener('stopAutosave', (data) => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
            setTime('30')
        }
    })

    // Доделать
    const saveNow = async () => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
            setTime('30')
            let res = await Api.asyncPut(obj.path, obj.data)

            if(res !== 'error') {
                setLastTime(utils.formatDate())
                setObj({})
                return
            }
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
                stop.current = false

                let res = await Api.asyncPut(path, body)

                if(res !== 'error') {
                    setLastTime(utils.formatDate())
                    Store.setListener('updateOriginal', body)
                    return
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
        saveNow,
        lastTime
    }
}