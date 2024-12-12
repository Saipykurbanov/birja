import { useState } from "react"


export default function useDetail() {

    const [tab, setTab] = useState(1)

    return {
        tab,
        setTab
    }
}