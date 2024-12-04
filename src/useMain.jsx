import { useState } from "react"


export default function useMain() {

    const [auth, setAuth] = useState(false)

    return {
        auth,
    }
}