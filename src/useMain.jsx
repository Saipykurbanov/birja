import { useEffect, useState } from "react"
import Api from "./utils/Api"


export default function useMain() {

    const [auth, setAuth] = useState(1)

    useEffect(() => {

        let init = Api.initToken()
        
        setTimeout(() => {
            setAuth(init)
        }, 1000)

    }, [])

    return {
        auth,
    }
}