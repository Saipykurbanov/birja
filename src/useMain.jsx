import { useEffect, useState } from "react"
import Api from "./utils/Api"


export default function useMain() {

    const [auth, setAuth] = useState(false)

    useEffect(() => {

        let init = Api.initToken()
        
        setAuth(init)

    }, [])

    return {
        auth,
    }
}