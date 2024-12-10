const Api = {}

Api.url = 'http://185.127.225.49:8083/'

Api.initToken = () => {
    let token = localStorage.getItem('accessToken')
    let time = localStorage.getItem('timestamp')

    if(token === '') {
        return false
    }

    if(!token) {
        return false
    }


    if(time < Date.now()) {
        Api.logout()
        return false
    }

    return true
}

Api.signIn = async (body) => {

    try {

        console.log(body)

        let res = await fetch(`${Api.url}api/users/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(body),
        })
    
        if(res.status === 200) {
            return res = await res.json()
        }

        return 'error'

    } catch(e) {
        return 'error'
    }

}

Api.post = async () => {
    try {

    } catch(e) {
        return 'error'
    }
}

Api.logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('timestamp')
    return window.location.reload()
}

export default Api;